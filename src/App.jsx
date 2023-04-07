import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/About";
import { Account } from "./components/pages/account/Account";
import { Logout } from "./components/pages/account/Logout";
import { DeleteAccount } from "./components/pages/account/DeleteAccount";
import { ChangePassword } from "./components/pages/account/ChangePassword";
import { NotFound } from "./components/pages/NotFound";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import PublicLayout from "./components/PubliLaout";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/account" element={<Account />} />
					<Route path="/logout" element={<Logout />} />

					<Route
						path="/delete-account"
						element={<DeleteAccount />}
					/>
					<Route
						path="/change-password"
						element={<ChangePassword />}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route element={<PublicLayout />}>
					<Route path="/login" element={<Login />} />

					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
