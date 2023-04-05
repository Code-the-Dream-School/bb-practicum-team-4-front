import * as Yup from "yup";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../scss/_login.scss";
import { Register } from "./Register";
export const Login = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [register, setRegister] = useState("hide");
	const [registerActive, setRegisterActive] = useState("");
	const [loginActive, setLoginActive] = useState("active");
	const [login, setLogin] = useState("show");
	const loginSchema = Yup.object().shape({
		email: Yup.string()
			.email(`Email is Incorrect!`)
			.required(`Email Feild Is Required!`),
		password: Yup.string().required(
			`Password Feild Is Required!`
		),
	});
	const initialValues = {
		email: "",
		password: "",
	};
	const formik = useFormik({
		initialValues,
		validationSchema: loginSchema,
		onSubmit: async (
			values,
			{ setStatus, setSubmitting }
		) => {
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

	const showLoginDiv = () => {
		setLogin("show");
		setRegister("hide");
		setLoginActive("active");
		setRegisterActive("");
	};
	const showRegisterDiv = () => {
		setRegister("show");
		setLogin("hide");
		setLoginActive("");
		setRegisterActive("active");
	};
	return (
		<Fragment>
			<div className="main">
				<div className="tab-btn">
					<a
						href="#"
						onClick={showLoginDiv}
						className={`login-tab ${loginActive}`}
					>
						Sign In
					</a>
					<a
						href="#"
						onClick={showRegisterDiv}
						className={`register-tab ${registerActive}`}
					>
						Sign Up
					</a>
				</div>
				<div className={`login-box ${login}`}>
					<form
						onSubmit={formik.handleSubmit}
						noValidate
						autoComplete="false"
						id="login-form"
					>
						<input
							type="email"
							{...formik.getFieldProps("email")}
							className={
								formik.touched.email && formik.errors.email
									? "inp is-invalid"
									: "inp "
							}
							placeholder="Email"
						/>
						{formik.touched.email &&
							formik.errors.email && (
								<span className="alert-text">
									{formik.errors.email}
								</span>
							)}
						<input
							type="password"
							{...formik.getFieldProps("password")}
							className={
								formik.touched.password &&
								formik.errors.password
									? "inp is-invalid"
									: "inp "
							}
							placeholder="Password"
						/>
						{formik.touched.password &&
							formik.errors.password && (
								<span className="alert-text">
									{formik.errors.password}
								</span>
							)}
						<button
							className="sub-btn"
							disabled={
								formik.isSubmitting || !formik.isValid
							}
						>
							{!loading && "CONTINUE"}
							{loading && "Please Wait..."}
						</button>
					</form>
					<a
						href="#"
						id="forgot"
						className="mt-3 fs-3 text-primary"
					>
						Resset Your Password
					</a>
				</div>
				<div className={`register-box ${register}`}>
					<Register />
				</div>
			</div>
		</Fragment>
	);
};
