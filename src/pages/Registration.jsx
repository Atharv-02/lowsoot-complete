import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../api/url";
import React from "react";

export function Registration() {
  const [mail, setMail] = useState("");
  const [pas, setPas] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(`${baseurl}/register`);
    try {
      setLoader(true);
      const response = await axios.post(`${baseurl}/register`, {
        email: data.email,
        password: data.password,
        companyId: data.companyId,
      });
      // console.log(response);
      if (response.status === 201) {
        toast.success("User created", {
          position: "top-right",
          autoClose: 1998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("User creation failed", {
        position: "top-right",
        autoClose: 1998,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoader(false);
    }
  };
  const { register, handleSubmit, setFocus } = useForm({
    defaultValues: {},
  });
  useEffect(() => {
    setFocus("name");
  }, [setFocus]);
  return (
    <div>
      <section className="siginpage">
        <div className="sigin__side"></div>
        <div className="sigin__container">
          <div className="sigin__head">
            <h1 className="sigin__header">Sign up</h1>
            <p className="sigin__message">
              Already have an account?&nbsp;
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="sigin__form">
            <div className="sigin__formonsite">
              <input
                ref={inputRef}
                {...register("name")}
                required
                placeholder="Name"
                className="sigin__input"
                type="text"
              />
              <input
                {...register("companyId")}
                required
                placeholder="company id"
                className="sigin__input"
                type="text"
              />
              <input
                {...register("email")}
                required
                placeholder="company mail"
                className="sigin__input"
                type="email"
                onChange={(eve) => setMail(eve.target.value)}
              />
              <input
                {...register("emailconf")}
                required
                placeholder="confirm mail"
                className="sigin__input"
                pattern={mail}
                type="email"
                title="Emails don't match"
              />
              <input
                placeholder="password"
                required
                {...register("password")}
                className="sigin__input"
                type="text"
                title="Must contain minimum 8 maximum 16 characters with at least 1 Upper Case, 1 lower case, and 1 numeric character"
                onChange={(eve) => setPas(eve.target.value)}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
              />
              <input
                type="text"
                {...register("passwordconf")}
                required
                placeholder="confirm password"
                pattern={pas}
                title="Passwords don't match"
                className="sigin__input"
              />
              <button type="submit" className="sigin__button">
                <div className="sigin__buttonsubcont">
                  <div>Sign up</div>
                  {loader && <div className="loadingspinner spinning" />}
                </div>
              </button>
              <div className="sign__options">
                <div className="sign__line"></div>
                <div className="sign__or">OR</div>
                <div className="sign__line"></div>
              </div>
              <button type="button" className="sigin__withgoogle">
                <img
                  className="sigin__withgoogleicon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google"
                />
                <span className="sigin__withgoogletext">
                  Continue with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
