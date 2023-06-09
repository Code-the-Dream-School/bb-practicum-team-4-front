import { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { Accordion } from "../../accordion/Accordion";
import { OrderHistory } from "components/pages/account/orders/OrderHistory";
import { ChangePassword } from "components/pages/account/ChangePassword";
import { DeleteAccount } from "components/pages/account/DeleteAccount";
// import { Logout } from "./Logout";

export const AccountMobile = () => {
	const navigate = useNavigate();
	const { userData, setUserData } =
		useContext(userDataContext);

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		// console.log("userData =====> ", userData);
		// if (userData === null) navigate("/");

		if (userData.token === null) navigate("/login");
		// if (userData === null) navigate("/");
	}, [userData]);
	/* eslint-disable react-hooks/exhaustive-deps */

	const logout = () => {
		let userDataNull = {
			user: null,
			token: null,
		};
		// setUserData({ ...userData, ...userDataNull });
		// userDataNull = null;
		// let userDataNull = null;
		setUserData({ ...userData, ...userDataNull });
		// console.log("userData ====> ", userData);
		// console.log("logged out!");
		navigate("/");
	};

	if (userData?.token)
		return (
			<section className="account mobile wrapper">
				{/* {userData.token === "" ? <></> : <h1>Account</h1>} */}
				{/* {userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>} */}
				{/* {userData.token === null ? <></> : <h1>User name: {userData.user.name} <br/> Token: {userData.token}</h1>} */}
				{Object.keys(userData).length === 0 ? (
					<h1 className="account__greeting">Hello,</h1>
				) : (
					<h1 className="account__greeting">
						Hello, {userData?.user?.name}
					</h1>
				)}
				<Accordion title="Order history">
					<p
						style={{
							fontSize: "1.6rem",
							padding: "1rem",
							color: "var(--color-neutral-grey)",
						}}
					>
						{/* In development */}
						<OrderHistory />
					</p>
				</Accordion>
				<Accordion title="Change password">
					<ChangePassword />
				</Accordion>
				<Accordion title="Delete account">
					<DeleteAccount />
				</Accordion>
				{/* <Accordion title="Log out">
                <Logout />
            </Accordion> */}
				<Link
					className="accordion accordion--link"
					to="/"
					onClick={() => logout()}
				>
					Log out
				</Link>
			</section>
		);
	return <></>;
};

// userData.token === null ? <></> : <h1>{JSON.stringify(userData, null, 4)}</h1>
