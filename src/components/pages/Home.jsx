<<<<<<< HEAD
// import { OurUniqueFeatures } from "../OurUniqueFeatures";
// import upper from "../../images/upper_main.svg";
// import skyski from "../../images/skyski.svg";
// import build from "../../images/webuild.svg";
// import line from "../../images/icons/line.svg";

export const Home = () => {
	return (
		<div>
            <h1>HELLO</h1>
			{/* <img className="header__home" src={upper} alt="home" />
			<img
				className="header__skyski"
				src={skyski}
				alt="skyski"
			/>
			<img
				className="header__webuild"
				src={build}
				alt="We build only the best"
			/>
			<img className="header__line" src={line} alt="line" /> */}
			{/* <OurUniqueFeatures /> */}
			{/*<div className="wrapper">
            {/* not sure if i should use h1, h2, or h3 here */}
			{/* <h3>Our Most Popular Board category</h3>
            <div className="filters">
                <p>All</p>
                <p>Ski</p>
                <p>Boards</p>
                <p>Other</p>
            </div>
            <div className="products">
    <div className="product"></div>*
            </div>
    </div>*/}
=======
import { Catalog } from "../Catalog";

export const Home = () => {
	return (
		<div className="wrapper">
			{/* not sure if i should use h1, h2, or h3 here */}
			<Catalog />
>>>>>>> 83d97e10aeee0504a80f2c3f7b6e53b16619fea5
		</div>
	);
};
