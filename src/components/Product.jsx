import { userDataContext } from "../contexts/userContext"
import snowboard from "../images/snowboard_light.png";

export const Product = () => {
	return (
		<div className="wrapper">
            <div className="product">
			<img className="product__img" src={snowboard} alt="snowboard" />
			<div className="product__content">
				<p className="product__title">Sardinia White</p>
				<p className="product__price">312.49 SAR</p>
				<p>description</p>
                <div className="product__change-quantity-container">
                    <span className="product__change-quantity product__change-quantity--left pointer">-</span>
                    <span className="product__quantity pointer">1</span>
                    <span className="product__change-quantity product__change-quantity--right pointer">+</span>
                </div>
                <p>Add to cart</p>
			</div>
		</div>
        </div>
	);
};
