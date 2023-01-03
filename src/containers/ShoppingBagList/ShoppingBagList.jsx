import { useEffect, useState } from "react";
import ShoppingBagItem from "../../components/ShoppingBagItem/ShoppingBagItem";
import styles from "./ShoppingBagList.module.scss";

const ShoppingBagList = ({ productsInCart, getUpdatedProducts }) => {
	const [updatedProducts, setUpdatedProducts] = useState(productsInCart);

	useEffect(() => {
		setUpdatedProducts(productsInCart);
	}, [productsInCart]);

	// Function to keep track of product updates based on quantity changes
	const handleProductUpdate = (productId, productQuantity) => {
		// Update quantity for products
		const updateProductQuantity = updatedProducts.map((product) => {
			if (product.id !== productId) return product;

			return {
				...product,
				qtySelected: productQuantity,
			};
		});

		// Remove product if quantity is zero
		const filteredProducts = updatedProducts.filter((product) => product.id !== productId);

		const products = !!productQuantity ? updateProductQuantity : filteredProducts;

		setUpdatedProducts(products); // Update product items

		// Pass the updated products up to the "ShoppingBagPage" component
		getUpdatedProducts(products);
	};

	return (
		<section className={styles.ShoppingBagList}>
			{productsInCart.length > 0 ? (
				productsInCart.map((product, id) => <ShoppingBagItem {...{ key: id, product, handleProductUpdate }} />)
			) : (
				<p>No product available</p>
			)}
		</section>
	);
};

export default ShoppingBagList;
