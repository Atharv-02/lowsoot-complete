import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../api/url";
import { useAuth } from "../contexts/Authcontext";

export function Login() {
  const { isuserloggedin, setIsuserloggedin, setToken } = useAuth();
  const [usermail, setUsermail] = useState("");
  const [userpword, setUserpword] = useState("");
  const [loader, setLoader] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";
  // const buttonstatus =
  //   usermail.length > 0 && userpword.length > 0 ? false : true;
  const { register, handleSubmit, setFocus } = useForm({
    defaultValues: {},
  });
  async function handleLogin(params) {
    try {
      setLoader(true);
      const { email, password } = params;
      const response = await axios.post(`${baseurl}/login`, {
        email,
        password,
      });
      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
        const stringifieddata = JSON.stringify({
          loginstatus: true,
          clienttoken: response.data.token,
        });
        localStorage.setItem("login", stringifieddata);
        setIsuserloggedin(true);
        setToken(response.data.token);
        navigate(from);
        toast.success("login sucessfull", {
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
      toast.error("login failed", {
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
  const onSubmit = async (data) => {
    handleLogin(data);
    try {
      setLoader(true);
      const response = await axios.post(`${baseurl}/login`, data);
      //  console.log(response);
      //  console.log(response.status);
      if (response.status === 200) {
        const stringifieddata = JSON.stringify({
          loginstatus: true,
          clienttoken: response.data.token,
        });
        localStorage.setItem("login", stringifieddata);
        setIsuserloggedin(true);
        setToken(response.data.token);
        navigate(from);
        toast.success("login sucessfull", {
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
      if (
        error.response.data.message === "Email not found" &&
        error.response.status === 404
      ) {
        toast.error("Email not found", {
          position: "top-right",
          autoClose: 1998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (
        error.response.data.message === "Password does not match" &&
        error.response.status === 400
      ) {
        toast.error("Password does not match", {
          position: "top-right",
          autoClose: 1998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("login failed", {
          position: "top-right",
          autoClose: 1998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      // console.log({ errorresponse: error.response.data.message });
    }
  };
  useEffect(() => {
    setFocus("email");
  }, [setFocus]);
  return (
    <>
      <div className="signupage">
        <div className="brand">
          <div className="brand__cont">
            <img
              className="brand__image"
              src="https://media-exp2.licdn.com/dms/image/C560BAQHmrQrq-ifvpQ/company-logo_200_200/0/1627669001150?e=1665619200&v=beta&t=8cWndk6bBeVRicz1to769LOAshKTp9Vv039pDBDA3So"
              alt=""
            /> </div>
        </div>
        <section className="signup">
          <div className="signup__head">
            <h1 className="signup__header">Login</h1>
            <p className="signup__message">Dont have an account?&nbsp; <Link className="link" to="/signup">Sign up</Link></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="signup__form">
            <div className="signup__formonsitelogin">
              <input ref={inputRef}
                onChange={(event) => setUsermail(event.target.value)}
                {...register("email")}  placeholder="email" className="signup__input" type="email" required={true} />
              <input 
                onChange={(event) => setUserpword(event.target.value)}
                {...register("password")}
                placeholder="password"
                className="signup__input"
                type="password"
                required={true}
              />
              {isuserloggedin ? (
                <button
                  className="signup__button"
                  onClick={() => {
                    localStorage.removeItem("login");
                    setIsuserloggedin(false);
                    setToken(null);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleLogin({ email: usermail, password: userpword })
                  }
                  type="submit"
                  className="signup__button"
                >
                  Login
                  {loader && (
                    <span className="spin__loader spin__rotate"></span>
                  )}
                </button>
              )}
            </div>
            <div className="signup__formonthirdparty">
              <div className="fangcont">
                <button type="button" className="fangbtn fangbtn--google">
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
                {/* <button className="fangbtn fangbtn--meta">
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
                </button> */}
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
