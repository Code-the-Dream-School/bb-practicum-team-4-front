import * as Yup from "yup";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import loginImage from "../images/login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../scss/_login.scss";
export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(`Email is Incorrect!`)
      .required(`Email Feild Is Required!`),
    password: Yup.string().required(`Password Feild Is Required!`),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      axios
        .post("login")
        .then((res) => {
          localStorage.setItem("API_TOKEN", res.token);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setStatus(`Your Login Information Incorrect!`);
        });
    },
  });

  return (
    <Fragment>
      <div className="" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={formik.handleSubmit} noValidate>
            <h1>Sign in</h1>
            <h1 className="text-danger">{formik.status}</h1>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className={
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="alert-text">{formik.errors.email}</span>
            )}
            <input
              type="password"
              {...formik.getFieldProps("password")}
              className={
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password && (
              <span className="alert-text">{formik.errors.password}</span>
            )}
            <button
              className="site-btn-login"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && "SIGN IN"}
              {loading && "Please Wait..."}
            </button>
            <a href="#">Forgot your password?</a>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <img src={loginImage} className="login-image" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
