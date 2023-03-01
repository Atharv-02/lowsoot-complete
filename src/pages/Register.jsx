import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../api/url";
import { toast } from "react-toastify";
import { useRegis } from "../contexts/Registrationprov";
import { decidebuttonstatus } from "../functions/decidebuttonstatus";
import { Link } from "react-router-dom";

export default function Register() {
  const { regisstate, regisdispatch } = useRegis();
  const [loader, setLoader] = useState(false);
  const buttonstatus = decidebuttonstatus({
    mail: regisstate.mail,
    cmail: regisstate.cmail,
    pword: regisstate.pword,
    cpword: regisstate.cpword,
  });
  async function handleRegistration(params) {
    try {
      setLoader(true);
      const { email, password } = params;
      const response = await axios.post(`${baseurl}/register`, {
        email,
        password,
      });
      // console.log(response);
      // console.log(response.status);
      if (response.status === 201) {
        toast.success("Registration sucessfull", {
          position: "top-right",
          autoClose: 1998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log({ error });
      toast.error("Registration failed", {
        position: "top-right",
        autoClose: 1998,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <>
      <div className="signupage">
        <div className="brand">
          <div className="brand__cont">
            <img
              className="brand__image"
              src="https://media-exp2.licdn.com/dms/image/C560BAQHmrQrq-ifvpQ/company-logo_200_200/0/1627669001150?e=1665619200&v=beta&t=8cWndk6bBeVRicz1to769LOAshKTp9Vv039pDBDA3So"
              alt=""
            />
          </div>
        </div>
        <section className="signup">
          <div className="signup__head">
            <h1 className="signup__header">Sign up</h1>
            <p className="signup__message">
              Already have an account?&nbsp;
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="signup__form">
            <div className="signup__formonsite">
              <input
                value={regisstate.mail}
                onChange={(event) =>
                  regisdispatch({
                    type: "SETMAIL",
                    payload: { mail: event.target.value },
                  })
                }
                placeholder="Email"
                className="signup__input"
                type="text"
              />
              <input
                value={regisstate.cmail}
                onChange={(event) =>
                  regisdispatch({
                    type: "SETCMAIL",
                    payload: { cmail: event.target.value },
                  })
                }
                placeholder="Type your email again"
                className="signup__input"
                type="text"
              />
              <input
                value={regisstate.pword}
                onChange={(event) =>
                  regisdispatch({
                    type: "SETPWORD",
                    payload: { pword: event.target.value },
                  })
                }
                placeholder="Password"
                className="signup__input"
                type="text"
              />
              <input
                value={regisstate.cpword}
                type="password"
                onChange={(event) =>
                  regisdispatch({
                    type: "SETCPWORD",
                    payload: { cpword: event.target.value },
                  })
                }
                placeholder="Type your password again"
                className="signup__input"
              />
              <button
                className="signup__button"
                onClick={() =>
                  handleRegistration({
                    email: regisstate.mail,
                    password: regisstate.pword,
                  })
                }
                disabled={buttonstatus}
              >
                Sign up
                {loader && <span className="spin__loader spin__rotate"></span>}
              </button>
            </div>
            <div className="signup__formonthirdparty">
              <div className="fangcont">
                <button className="fangbtn fangbtn--google">
                  <div className="fangbtn__iconcont">
                    <img
                      className="fangbtn_icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="fang"
                    />
                  </div>
                  <div className="fangbtn__textcont">
                    <div className="fangbtn__text">Continue with Google</div>
                  </div>
                </button>
                <button className="fangbtn fangbtn--meta">
                  <div className="fangbtn__iconcont">
                    <img
                      className="fangbtn_icon"
                      src="https://www.svgrepo.com/show/183607/facebook.svg"
                      alt="fang"
                    />
                  </div>
                  <div className="fangbtn__textcont">
                    <div className="fangbtn__text">Continue with Facebook</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
