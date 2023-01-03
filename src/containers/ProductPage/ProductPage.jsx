import { useState, useContext } from "react";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import Button from "../../components/Button/Button";
import QtyButton from "../../components/QtyButton/QtyButton";
import { addProductToBag } from "../../services/shoppingBag";
import { actionTypes } from "../../context/ProductsDataContext";

const ProductPage = () => {
	const { productId } = useParams();
	const { store, dispatch } = useContext(ProductsDataContext);
	const { products, productsInCart } = store;

	// Finding the current product from the products state in the context
	const currentProduct = products.find((product) => product.id === productId);

	// Store data in a format of this:
	// selected = {size: "Small", color: "Black"...}
	let [selectedProduct, setSelectedProduct] = useState({
		color: "",
		size: "",
		qtySelected: 0,
	});

	// Handling the radio button change
	const handleRadioSelect = (e) => {
		const { name, value } = e.target;
		setSelectedProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Handling the add to cart button click
	const handleAddToBag = async (e) => {
		e.preventDefault();

		const { qtySelected } = selectedProduct;

		if (qtySelected > 0) {
			// If the item exist, update the items in the cart
			const currentItemInCart = productsInCart.find((item) => item.id === productId);

			// Preparing product info to update the backend with default fields to match the product collection
			let productInfo = {
				...selectedProduct,
				id: currentProduct.id,
				name: currentProduct.name,
				image: currentProduct.image,
				category: currentProduct.category,
				price: currentProduct.price,
			};

			if (currentItemInCart) {
				// Get the current qty added and add new qty and update the data with a total qty
				const currentQtyAdded = currentItemInCart.qtySelected;
				const updatedQuantity = selectedProduct.qtySelected + currentQtyAdded;

				setSelectedProduct((prevState) => ({
					...prevState,
					qtySelected: updatedQuantity,
				}));

				// We need to create clone of product state and update the quantity as "setSelectedProduct" is asynchronous
				productInfo = {
					...productInfo,
					qtySelected: updatedQuantity,
				};
			} else {
				// Add product in cart if it does not exist
				dispatch({
					type: actionTypes.ADD_CART_ITEMS,
					payload: {
						product: productInfo,
					},
				});
			}

			// Update the product info in the backend
			await addProductToBag(productInfo);

			alert("Selected item(s) have been added!");
		} else {
			alert("Please select the quantity");
		}
	};

	return (
		<section className={styles.ProductPage}>
			<div className={styles.ProductPage_Inner}>
				{currentProduct ? (
					<>
						<div className={styles.ProductPage_Col1}>
							<img src={currentProduct.image} alt="thumbnail" />
						</div>

						<div className={styles.ProductPage_Col2}>
							<h1>{currentProduct.name}</h1>
							<p>{currentProduct?.description || "No description available"}</p>

							<form onSubmit={handleAddToBag}>
								<p>Size:</p>
								<div className={styles.ProductPage_BtnsWrapper}>
									{currentProduct.sizes.length ? (
										currentProduct.sizes.map((size, index) => (
											<div key={index} className={styles.ProductPage_BtnItem}>
												<input type="radio" id={size.toLowerCase()} name="size" value={size} required onChange={handleRadioSelect} />
												<label htmlFor={size.toLowerCase()}>{size.toUpperCase()}</label>
											</div>
										))
									) : (
										<></>
									)}
								</div>

								<p>Color:</p>
								<div className={styles.ProductPage_BtnsWrapper}>
									{currentProduct.colors.length ? (
										currentProduct.colors.map((color, index) => (
											<div key={index} className={styles.ProductPage_BtnItem}>
												<input type="radio" id={color.toLowerCase()} name="color" value={color} required onChange={handleRadioSelect} />
												<label htmlFor={color.toLowerCase()}>{color.toUpperCase()}</label>
											</div>
										))
									) : (
										<></>
									)}
								</div>
								<div className={styles.ProductPage_PriceQtyWrapper}>
									<p>${currentProduct.price}</p>

									{currentProduct.qtyAvailable > 0 ? (
										<QtyButton
											{...{
												maxQuantity: currentProduct.qtyAvailable,
												onQuantityHandler: (quantity) => {
													setTimeout(() => {
														setSelectedProduct((prevState) => ({
															...prevState,
															qtySelected: quantity,
														}));
													}, 0);
												},
											}}
										/>
									) : (
										<p>Out of Stock</p>
									)}
								</div>

								<Button buttonText="Add to Shopping Bag" style="primary" type="submit" disabled={selectedProduct.qtySelected === 0} />
							</form>
						</div>
					</>
				) : (
					<p>No information available</p>
				)}
			</div>
		</section>
	);
};

export default ProductPage;
