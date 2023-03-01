import { ErrorMessage, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { countriesarray } from "../data/countries";
import { Selecter } from "../components/Selecter";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [loader, setLoader] = useState(false);
  const Signupschema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    companymail: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phone: Yup.string().required("Phone is required").length(10),
    role: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    compname: Yup.string().required("Required"),
  });
  return (
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
        <Formik
          validationSchema={Signupschema}
          initialValues={{
            firstName: "",
            companymail: "",
            phone: "",
            role: "",
            country: "IN",
            city: "",
            compname: "",
          }}
          onSubmit={async (values) => {
            try {
              setLoader(true);
              const response = await axios.post(
                "https://productdemo.yogeshpendse.repl.co/enrolluser",
                {
                  ...values,
                }
              );
              if (response.status === 200) {
                // console.log(response.data);
                toast.success("Signup sucessfull", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            } catch (error) {
              toast.error("Some error occured", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } finally {
              setLoader(false);
            }
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="sigin__form">
              <div className="sigin__formonsite">
                <div>
                  <Field
                    className="sigin__input sigin__inputdemo"
                    id="firstName"
                    name="firstName"
                    required={true}
                    placeholder="name"
                  />
                  <span className="color-red">
                    <ErrorMessage name="firstName" />
                  </span>
                </div>
                <div>
                  <Field
                    id="email"
                    name="companymail"
                    required={true}
                    className="sigin__input sigin__inputdemo"
                    placeholder="email"
                    type="email"
                  />
                  <span className="color-red">
                    <ErrorMessage name="companymail" />
                  </span>
                </div>
                <div>
                  <Field
                    id="phone"
                    name="phone"
                    required={true}
                    className="sigin__input sigin__inputdemo"
                    placeholder="phone"
                  />
                  <span className="color-red">
                    <ErrorMessage name="phone" />
                  </span>
                </div>
                <div>
                  <Field
                    id="role"
                    name="role"
                    required={true}
                    className="sigin__input sigin__inputdemo"
                    placeholder="role"
                  />
                  <span className="color-red">
                    <ErrorMessage name="role" />
                  </span>
                </div>
                <div>
                  <Field
                    id="role"
                    name="city"
                    required={true}
                    className="sigin__input sigin__inputdemo"
                    placeholder="city"
                    type="tel"
                  />
                  <span className="color-red">
                    <ErrorMessage name="city" />
                  </span>
                </div>
                <div>
                  <Field
                    id="compname"
                    name="compname"
                    required={true}
                    className="sigin__input sigin__inputdemo"
                    placeholder="company"
                    type="tel"
                  />
                  <span className="color-red">
                    <ErrorMessage name="compname" />
                  </span>
                </div>
                <div>
                  <Selecter
                    label={"Country"}
                    name={"country"}
                    options={countriesarray}
                  />
                  <span className="color-red">
                    <ErrorMessage name="country" />
                  </span>
                </div>
                <button type="submit" className="sigin__button">
                  Signup
                  {loader && (
                    <span className="spin__loader-new spin__rotate"></span>
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}
