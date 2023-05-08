import home from "images/upper-main.png";

export const TopScreen = () => {
	return (
		<div className="top-screen">
			<img
				className="top-screen__main"
				src={home}
				alt="home"
			/>
			<div className="top-screen__text-and-button-container">
				<h1 className="top-screen__skyski">SKY & SKI </h1>
				<h2 className="top-screen__webuild">
					We build only the best, customized to your
					exacting demands
				</h2>
				<a href="#products">
					<button className="top-screen__button" onclick="location.href='#products'">
						SHOP NOW
					</button>
				</a>

			</div>
		</div>
	);
};
