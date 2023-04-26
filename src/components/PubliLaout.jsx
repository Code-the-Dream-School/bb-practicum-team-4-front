import { Outlet } from "react-router";
import "../scss/_login.scss";
const PublicLayout = () => {
	return (
		<main className="backgroundImage">
			<Outlet />
		</main>
	);
};
export default PublicLayout;
