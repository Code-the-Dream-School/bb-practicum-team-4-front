import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { SwitchCategory } from "components/SwitchCategory";
import { BASEPRODUCTSURL } from "api/index";
import { Component } from "./Component";
import { ProductCard } from "components/ProductCard.jsx";
// import { Button } from "utils/Button";
import snowboardLight from "images/snowboard_light.png";
import snowboardDark from "images/snowboard_dark.png";
import goggles from "images/goggles.png";
import boots from "images/boots.png";

export const Catalog = () => {
	// const products = [
	// 	{
	// 		id: "0",
	// 		productId: "0",
	// 		title: "Sardinia White",
	// 		category: "board",
	// 		price: "312.49 SAR",
	// 		img: snowboardLight,
	// 	},
	// 	{
	// 		id: "1",
	// 		productId: "1",
	// 		title: "Sicily Grey ",
	// 		category: "ski",
	// 		price: "312.49 SAR",
	// 		img: snowboardDark,
	// 	},
	// 	{
	// 		id: "2",
	// 		productId: "2",
	// 		title: "Sicily Grey",
	// 		category: "other",
	// 		price: "312.49 SAR",
	// 		img: goggles,
	// 	},
	// 	{
	// 		id: "3",
	// 		productId: "3",
	// 		title: "Sicily Grey Décor 30×60",
	// 		category: "other",
	// 		price: "312.49 SAR",
	// 		img: boots,
	// 	},
	// ];

	// const [products] = useState(productsData);
	// let products = [];

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(BASEPRODUCTSURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.text())
			.then((result) => {
				setProducts([...JSON.parse(result).products]);
			})
			.catch((error) => console.log("error", error));
	}, []);

	// const productsRender = products.map((product) => {
	// 	<div className="product-card">
	// 		{/* <img src={product.img} alt={product.title} /> */}
	// 		<div className="product-card__text">
	// 			<p className="product-card__title">
	// 				{product.productName}
	// 			</p>
	// 			<p className="product-card__price">
	// 				{product.productPrice}
	// 			</p>
	// 		</div>
	// 	</div>
	// })

	return (
		<div className="catalog">
			<div className="catalog-header-container">
				<hr className="catalog-header-container__horizontal-line" />
				<p className="catalog-header-container__heading">
					Catalog
				</p>
			</div>
			<h2>Our Most Popular Board category</h2>
			<SwitchCategory products={products} />
			{/* <Component products={products} /> */}
			<div className="products">
				{products.map((product) => (
					<Link to={`/product/${product._id}`}>
						<ProductCard
							product={product}
							id={product.id}
						/>
					</Link>
				))}
			</div>
			{/* {productsRender} */}
			{/* <Button /> */}
			<div className="button pointer">More products</div>
		</div>
	);
};
