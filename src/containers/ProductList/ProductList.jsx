import { ProductsDataContext } from "../../context/ProductsDataContext";
import Button from "../../components/Button/Button";
import Product from "../../components/Product/Product";
import styles from "./ProductList.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

const ProductList = ({ category }) => {
	const { store, dispatch } = useContext(ProductsDataContext);
	const { products: allProducts } = store;

	let filtered = allProducts;

	if (category === "wishlist") {
		filtered = allProducts.filter((product) => product.isInWishlist);
	} else if (category !== undefined) {
		filtered = allProducts.filter((product) => product.category === category);
	}

	return (
		<section className={styles.ProductsList}>
			<div className={styles.ProductsList_Inner}>
				{filtered.length ? (
					<>
						<div className={styles.ProductsList_ItemsWrapper}>
							{filtered.map((product) => (
								<Product key={product.id} data={product} dispatch={dispatch} />
							))}
						</div>
						{/* <Button buttonText="Load More" style="primary" /> */}
					</>
				) : (
					<p>No Product available</p>
				)}
			</div>
		</section>
	);
};

export default ProductList;
