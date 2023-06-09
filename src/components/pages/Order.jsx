import { useEffect, useContext, useState } from "react";
import {
	useNavigate,
	useLocation,
	Link,
} from "react-router-dom";
import { BASEURL } from "api/index";
// import { cartDataContext } from "contexts/cartContext";
import { userDataContext } from "contexts/userContext";

export const Order = () => {
	const { userData } = useContext(userDataContext);
	const URL = BASEURL + "orders/";
	const [order, setOrder] = useState(null);
	const currentPath = useLocation().pathname.split("/")[2];
	// console.log(currentPath);
	const navigate = useNavigate();
	// const order = {
	// 	products: [
	// 		{
	// 			productId: "1",
	// 			name: "NewProduct",
	// 			img: "https://i.ibb.co/WPtkVnX/snowboard-light.png",
	// 			quantity: "4",
	// 			price: "400",
	// 		},
	// 		{
	// 			productId: "2",
	// 			name: "NewProduct2",
	// 			img: "https://i.ibb.co/WPtkVnX/snowboard-light.png",
	// 			quantity: "2",
	// 			price: "150",
	// 		},
	// 	],
	// 	firstName: "first",
	// 	lastName: "last",
	// 	email: "test@test.com",
	// 	address: "123 n test",
	// 	city: "city",
	// 	state: "state",
	// 	zipCode: "12345",
	// 	country: "USA",
	// 	cardHolder: "card holder",
	// 	cardNumber: "1234",
	// 	expirationMonth: "12",
	// 	expirationYear: "34",
	// 	ccv: "123",
	// 	bill: "550",
	// };

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		if (Object.keys(userData).length === 0) navigate("/");
		const token = "Bearer " + userData.token;
		// console.log("token ====> ", token);
		const newURL = URL + currentPath;
		// console.log("newUrl ===> ", newURL);
		let myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Bearer ${userData.token}`
		);

		let requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch(newURL, requestOptions)
			.then((response) => response.text())
			.then((result) => {
				// console.log(JSON.parse(result).order);
				setOrder(JSON.parse(result).order);
				// console.log(
				// 	"order.createdAt ===> ",
				// 	order.createdAt.slice(0, 10)
				// );
			})
			.catch((error) => console.log("error", error));
	}, []);
	/* eslint-disable react-hooks/exhaustive-deps */

	return (
		<>
			{Object.keys(userData).length === 0 ? (
				<></>
			) : (
				<div className="wrapper">
					<div className="order">
						<h2 className="order__header">
							Your order has been placed
						</h2>
						<div className="order__info-container">
							{order ? (
								<p className="order__info-container-date">
									{/* 23 March 2023 */}
									{order?.createdAt.slice(0, 10)}
								</p>
							) : (
								<></>
							)}

							<p className="order__info-container-order-number">
								{/* N-573927584 */}
								N-{order?._id.slice(0, 9).toUpperCase()}
							</p>
							<p className="order__info-container-delivery-date">
								Delivery date: 30 March 2023
							</p>
							<p className="order__info-container-delivery-address">
								{/* Address: 7, Oxford Street, London W 13 NP,
								Great Britains43 */}
								Address: {order?.address} <br />
								City: {order?.city} <br />
								Zip: {order?.zip} <br />
								Country: {order?.country} <br />
							</p>
						</div>
						<div className="order__content-container">
							<div className="order__items">
								{order ? (
									<>
										{order.length > 0 ? (
											<>
												{order.products.map((product) => (
													<div className="cart-item">
														<img
															className="cart-item__img"
															src={product.img}
															alt="snowboard"
														/>
														<div className="cart-item__content">
															<div className="cart-item__title-container">
																<p className="cart-item__title">
																	{product.title}
																</p>
															</div>
															{/* <img
							className="cart-item__cross pointer"
							src={cross}
							alt="remove item from cart"
							// onClick={() =>
							// 	removeProductFromCart(item)
							// }
						/> */}
															<div className="cart-item__category-container">
																<p className="cart-item__category">
																	category
																</p>
															</div>
															<div className="cart-item__price-container">
																<p className="cart-item__price">
																	${product.price}
																</p>
															</div>
															<div className="cart-item__quantity-container-outer">
																<div className="cart-item-quantity-container">
																	{/* <button
									className="cart-item-quantity-container__change pointer"
									// onClick={() =>
									// 	decreaseQuantity(item, 1)
									// }
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 8L15 8"
											stroke="#4F4F4F"
											strokeWidth="2"
											stroke-linecap="round"
										/>
									</svg>
								</button> */}
																	<p className="cart-item-quantity-container__quantity">
																		{product.quantity}
																	</p>
																	{/* <button
									className="cart-item-quantity-container__change pointer"
									// onClick={() =>
									// 	increaseQuantity(item, 1)
									// }
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 14V8M8 8V2M8 8L14 8M8 8H2"
											stroke="#4F4F4F"
											strokeWidth="2"
											stroke-linecap="round"
										/>
									</svg>
								</button> */}
																</div>
															</div>
														</div>
													</div>
												))}
											</>
										) : (
											<></>
										)}
									</>
								) : (
									<></>
								)}
							</div>
							<div className="checkout__estimate-container">
								<div className="cart-checkout-container__row">
									<p className="cart-checkout-container__before-total">
										Shipping & Handling
									</p>
									<p className="cart-checkout-container__before-total">
										Free
									</p>
								</div>
								<div className="cart-checkout-container__row">
									<p className="cart-checkout-container__before-total">
										Price
									</p>
									<p className="cart-checkout-container__before-total">
										{/* ${cart.length > 0 ? estimate : <></>} */}
									</p>
								</div>
								<div className="cart-checkout-container__row">
									<p className="cart-checkout-container__before-total">
										Tax
									</p>
									{/* <p>Tax</p> */}
									<p className="cart-checkout-container__before-total">
										{/* ${tax.toFixed(2)}$ */}
										{/* {cart.length > 0 ? tax : <></>} */}
									</p>
								</div>
								<div className="cart-checkout-container__row">
									<p className="cart-checkout-container__total">
										GRAND TOTAL
									</p>
									<p className="cart-checkout-container__total">
										{/* ${finalPrice.toFixed(2)}$ */}
										{/* {cart.length > 0 ? finalPrice : <></>} */}
									</p>
								</div>
								<Link to="/account">
									<button className="button pointer">
										Go to order history
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
