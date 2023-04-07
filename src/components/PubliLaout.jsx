import { Outlet } from "react-router";
import { Footer } from "./layout/Footer";
import loginImage from "../images/login.jpg";
import "../scss/_login.scss";
const PublicLayout = () => {
	return (
		<main className="backgroundImage">
			<Outlet />
		</main>
	);
};
export default PublicLayout;
