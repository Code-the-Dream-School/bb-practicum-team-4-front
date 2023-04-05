import { useState } from "react";
import { SwitchCategory } from "./SwitchCategory";
// import { Button } from "./utils/Button";
import snowboardLight from "../images/snowboard_light.png";
import snowboardDark from "../images/snowboard_dark.png";
import goggles from "../images/goggles.png";
import boots from "../images/boots.png";

export const Catalog = () => {
	const productsData = [
		{
			id: "0",
			name: "Sardinia White",
			category: "board",
			price: "312.49 SAR",
			img: snowboardLight,
		},
		{
			id: "1",
			name: "Sicily Grey ",
			category: "ski",
			price: "312.49 SAR",
			img: snowboardDark,
		},
		{
			id: "2",
			name: "Sicily Grey",
			category: "other",
			price: "312.49 SAR",
			img: goggles,
		},
		{
			id: "3",
			name: "Sicily Grey Décor 30×60",
			category: "other",
			price: "312.49 SAR",
			img: boots,
		},
	];

	const [products] = useState(productsData);

	return (
		<div className="catalog">
			<div className="catalog-header-container">
				<hr className="catalog-header-container__horizontal-line" />
				<p className="catalog-header-container__heading">
					Catalog
				</p>
			</div>
			<h2>Our Most Popular Board category</h2>
			<SwitchCategory
				products={products}
			/>
			{/* <Button /> */}
			<div className="button">More products</div>
		</div>
	);
};
