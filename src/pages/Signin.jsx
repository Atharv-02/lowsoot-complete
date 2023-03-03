import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useState, useEffect } from 'react';
import img from '../assets/ESG 1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Authprov, useAuth } from '../contexts/Authcontext';
export function Signin() {
  const {
    token,
    setToken,
    isuserloggedin,
    setIsuserloggedin,
    company,
    setCompany,
  } = useAuth();
  const Loginschema = Yup.object().shape({
    companymail: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  });
  const [loader, setLoader] = useState(false);

  const { state } = useLocation();
  const [email, setEMail] = useState();
  const [pass, setPass] = useState();
  const [log, setLog] = useState(true);
  const [lS, setLS] = useState([]);
  const [err, setErr] = useState(false);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const check = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://www.lowsootbackend.xyz/login',
        {
          email: email,
          password: pass,
        }
      );
      const token = data.token;
      const companyId = data.companyId;
      // console.log(token);
      if (token) {
        localStorage.setItem(
          'data',
          JSON.stringify({
            clienttoken: token,
            loginstatus: true,
            clientcompany: companyId,
          })
        );
        setToken(token);
        setIsuserloggedin(true);
        setCompany(companyId);
        routeChange();
      }
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <div>
        <section className='siginpage'>
          <div className='sigin__side'>
            <img src={img} alt='' />
          </div>
          <div className='sigin__container'>
            <div className='sigin__head'>
              <h1 className='sigin__header'>Login</h1>
              {err ? (
                <div className='error'>Invalid Username / Password</div>
              ) : null}
              {/* <p className='sigin__message'>
                Dont have an account?&nbsp;
                <Link className='link' to='/signup'>
                  Signup
                </Link>
              </p> */}
              <br />
              <br />
            </div>
            <form>
              <input
                type='email'
                value={email}
                onChange={(e) => setEMail(e.target.value)}
                className='input-login'
                placeholder='Email'
              />
              <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className='input-login'
                placeholder='Passsword'
              />

              <button type='submit' className='btn-submit' onClick={check}>
                Log In
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
