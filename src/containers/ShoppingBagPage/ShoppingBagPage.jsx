import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import SubpageBanner from "../../components/SubpageBanner/SubpageBanner";
import ShoppingBagList from "../ShoppingBagList/ShoppingBagList";
import styles from "./ShoppingBagPage.module.scss";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import { addProductToBag } from "../../services/shoppingBag";

const ShoppingBagPage = () => {
	const { store } = useContext(ProductsDataContext);
	const { productsInCart } = store;
	const [updatedProducts, setUpdatedProducts] = useState(productsInCart);

	const [subtotal, setSubtotal] = useState(0);
	const [shippingFee, setShippingFee] = useState(15);

	// Make sure to calculate price total on component mount
	useEffect(() => {
		setUpdatedProducts(productsInCart);

		let calculateSubTotalPrice = productsInCart.reduce((acc, current) => {
			return acc + current.price * current.qtySelected;
		}, 0);

		setSubtotal(calculateSubTotalPrice);
		calculateSubTotalPrice > 50 ? setShippingFee(0) : setShippingFee(15);
	}, []);

	const showIn2DecimalNum = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};

	const handleButtonClick = async (type) => {
		if (type === "home") {
			useNavigate("/");
			return;
		}

		await addProductToBag(...updatedProducts); // error occurs when data is undefined - no item

		// calculation for price total here
		let calculateSubTotalPrice = updatedProducts.reduce((acc, current) => {
			return acc + current.price * current.qtySelected;
		}, 0);

		setSubtotal(calculateSubTotalPrice);
		calculateSubTotalPrice > 50 ? setShippingFee(0) : setShippingFee(15);
	};

	return (
		<>
			<SubpageBanner pageTitle="Shopping Bag" />

			<section className={styles.ShoppingBagPage}>
				<div>
					{productsInCart ? (
						<ShoppingBagList
							{...{
								productsInCart,
								getUpdatedProducts: (updatedProducts) => {
									setTimeout(() => {
										setUpdatedProducts(updatedProducts);
									}, 0);
								},
							}}
						/>
					) : (
						<div>
							<p>No item is added yet.</p>
							<Button buttonText="Go Back to Shop" style="primary" onClick={() => handleButtonClick("home")} />
						</div>
					)}

					<section className={styles.CheckoutSec}>
						<div>
							<p>Subtotal</p>
							<p>${showIn2DecimalNum(subtotal)}</p>
						</div>
						<div>
							<p>Shipping Fee</p>
							<p>${showIn2DecimalNum(subtotal > 50 ? 0 : shippingFee)}</p>
						</div>
						<div>
							<p>Total</p>
							<p>${showIn2DecimalNum(subtotal + shippingFee)}</p>
						</div>

						<Button buttonText="Update Cart" style="primary" handleClickAction={handleButtonClick} />
					</section>
				</div>
			</section>
		</>
	);
};

export default ShoppingBagPage;
