import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const registerSchema = Yup.object().shape({
    name: Yup.string().required(`Name Feild Is Required!`),
    username: Yup.string().required(`Username Feild Is Required!`),
    email: Yup.string()
      .email(`Email is Incorrect!`)
      .required(`Email Feild Is Required!`),
    password: Yup.string().required(`Password Feild Is Required!`),
  });
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      axios
        .post("register", {
          name: values.name,
          username: values.username,
          email: values.email,
          password: values.password,
        })
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
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          {...formik.getFieldProps("name")}
          className={
            formik.touched.name && formik.errors.name
              ? "inp is-invalid"
              : "inp "
          }
        />
        {formik.touched.name && formik.errors.name && (
          <span className="alert-text">{formik.errors.name}</span>
        )}
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          {...formik.getFieldProps("username")}
          className={
            formik.touched.username && formik.errors.username
              ? "inp is-invalid"
              : "inp "
          }
        />
        {formik.touched.username && formik.errors.username && (
          <span className="alert-text">{formik.errors.username}</span>
        )}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Emmail"
          {...formik.getFieldProps("email")}
          className={
            formik.touched.email && formik.errors.email
              ? "inp is-invalid"
              : "inp "
          }
        />
        {formik.touched.email && formik.errors.email && (
          <span className="alert-text">{formik.errors.email}</span>
        )}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
          className={
            formik.touched.password && formik.errors.password
              ? "inp is-invalid"
              : "inp "
          }
        />
        {formik.touched.password && formik.errors.password && (
          <span className="alert-text">{formik.errors.password}</span>
        )}

        <button
          className="sub-btn"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && "REGISTER"}
          {loading && "Please Wait..."}
        </button>
      </form>
    </>
  );
};
