import { useEffect, useContext, useState } from "react";
import QtyButton from "../QtyButton/QtyButton";
import thumbnail from "./hotdog-ankle.jpg";
import styles from "./ShoppingBagItem.module.scss";
import { deleteProduct } from "../../services/shoppingBag";
import { shoppingBagListener } from "../../services/listeners";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import { actionTypes } from "../../context/ProductsDataContext";

const ShoppingBagItem = ({ product, handleProductUpdate }) => {
	const { store, dispatch } = useContext(ProductsDataContext);
	const { color, id, name, price, qtySelected, size, category, image } = product;

	// Get the max quantity in the products collection for current product
	const maxQuantity = store.products.find((product) => product.id === id).qtyAvailable;

	useEffect(() => {
		// Set the listener
		const unsubscribe = shoppingBagListener(id, dispatch);

		() => unsubscribe();
	}, []);

	const handleDeleteItem = async (id) => {
		dispatch({
			type: actionTypes.REMOVE_CART_ITEMS,
			payload: {
				id,
			},
		});

		await deleteProduct(id);
		handleProductUpdate(id, 0);
	};

	return (
		<div className={styles.ShoppingBagItem}>
			<div className={styles.ShoppingBagItem_Col1}>
				<img src={image} alt="thumbnail" className={styles.ShoppingBagItem_Thumbnail} />
			</div>

			<div className={styles.ShoppingBagItem_Col2}>
				<div className={styles.ShoppingBagItem_TextsWrapper}>
					<h3>{name}</h3>
					<p>{`Size: ${size}`}</p>
					<p>{`Color: ${color}`}</p>
					<p>{`Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`}</p>

					<button className={styles.ShoppingBagItem_RemoveBtn} onClick={() => handleDeleteItem(id)}>
						Remove
					</button>
				</div>

				<div className={styles.ShoppingBagItem_PriceQtyWrapper}>
					<p>${price}</p>

					<QtyButton
						{...{
							initialQuantity: qtySelected,
							maxQuantity,
							onQuantityHandler: (quantity) => {
								handleProductUpdate(id, quantity);
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ShoppingBagItem;
