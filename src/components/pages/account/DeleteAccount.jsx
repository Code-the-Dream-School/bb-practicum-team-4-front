import { useState, useContext } from "react";
import { userDataContext } from "contexts/userContext";
import { BASEURL } from "api/index";

const BASEAUTHURL = BASEURL + "auth";
const URL = BASEAUTHURL + "removeuser";

export const DeleteAccount = () => {
	const { userData, setUserData } =
		useContext(userDataContext);
	const [userFormData, setUserFormData] = useState({
		email: "",
	});
	// const [userFormData, setUserFormData] = useState({
	// 	email: "test@test.com",
	// });

	const handleChange = (event) => {
		setUserFormData({
			...userFormData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// fetchData(URL, "DELETE", userInfo);
		fetch(URL, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userFormData),
		})
			.then((response) => response.text())
			.then((result) => {
				// console.log(result);
				// console.log("type of result ====> ", typeof result);
				// console.log(JSON.stringify(result))
				setUserData({ ...userData, token: null });
				// console.log("userData ====> ", userData);
			})
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="account__section-content">
			<h2 className="account__section-heading">
				Delete account
			</h2>
			<form
				className="form"
				onSubmit={(e) => handleSubmit(e)}
			>
				<label className="label" htmlFor="email">
					Enter your password to delete your account.{" "}
				</label>
				<input
					className="input"
					type="text"
					id="email"
					name="email"
					required
					value={userFormData.email}
					onChange={(e) => handleChange(e)}
				/>
				<button className="button pointer" type="submit">
					Delete account
				</button>
			</form>
		</div>
	);
};
