import React, { useEffect } from "react";
import style from "./login.module.css";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logUserIn } from "../../redux/slices/loginSlice";
import $ from "jquery";

const Login = () => {
  const { userData, isLogged } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (values) => {
    dispatch(logUserIn(values));
  };

  useEffect(() => {
    if (isLogged === true) {
      $(".sucMsg").fadeIn(500, () => {
        setTimeout(() => {
          $(".sucMsg").fadeOut(500);
          navigate(-1);
        }, 2000);
      });
    } else if (isLogged === false) {
      $(".errMsg").fadeIn(500, () => {
        setTimeout(() => {
          $(".errMsg").fadeOut(500);
        }, 3000);
      });
    }
  }, [isLogged]);

  const validateEmail = (value) => {
    let error = "";
    if (!value) error = "Email is Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      error = "Invalid Email Address";
    return error;
  };
  const validatePassword = (value) => {
    let error = "";
    if (!value) error = "Password is Required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&_])[A-Za-z\d!@#$%&_]{8,16}$/i.test(
        value
      )
    )
      error =
        "userPassword must be between 8 to 16, contains at least  uppercase, lowercase, number and special character (! @ # $ % & _)";
    return error;
  };

  return (
    <>
      <div>
        <h2 className="container my-4 me-4">Login</h2>

        <div
          style={{ display: "none" }}
          className="errMsg alert alert-danger w-50 mx-auto text-center"
        >
          Incorrect email or password
        </div>
        <div
          style={{ display: "none" }}
          className="sucMsg alert alert-success w-50 mx-auto text-center"
        >
          Successfull login, Welcome Back
        </div>
        <Formik
          initialValues={userData}
          onSubmit={(values) => {
            submitForm(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={`w-50 mx-auto`}>
              <div className={`container`}>
                <div className={`row`}>
                  <div className="col-md-12 py-4 px-0 mx-auto">
                    <Field
                      id="email"
                      validate={validateEmail}
                      className={`${style.inputField} form-control mt-1 w-100`}
                      placeholder="Email"
                      name="userEmail"
                    />
                    {errors.userEmail && touched.userEmail ? (
                      <div className={`mt-1 alert alert-danger rounded-0 py-2`}>
                        {errors.userEmail}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-12 py-4 px-0 mx-auto">
                    <Field
                      type="password"
                      id="userPassword"
                      validate={validatePassword}
                      className={`${style.inputField} form-control mt-1 w-100`}
                      placeholder="Password"
                      name="userPassword"
                    />
                    {errors.userPassword && touched.userPassword ? (
                      <div className={`mt-1 alert alert-danger rounded-0 py-2`}>
                        {errors.userPassword}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className={`my-4 text-end`}>
                <button
                  className={`${style.AuthBtn} py-2 px-5 text-white rounded-1`}
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
