import Button from "../../components/Button/Button";
import SubpageBanner from "../../components/SubpageBanner/SubpageBanner";
import ProductList from "../ProductList/ProductList";
import styles from "./WishlistPage.module.scss";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import { useContext } from "react";

const WishlistPage = () => {
	const { store } = useContext(ProductsDataContext);
	const { products: allProducts } = store;
	const hasWishlist = allProducts.some((product) => product.isInWishlist);

	const paraText = hasWishlist ? "You can click heart button to remove the product from your wishlist." : "No item is added yet!";

	return (
		<>
			<SubpageBanner pageTitle="Your Wishlist" pagePara={paraText} />

			{hasWishlist ? (
				<ProductList category="wishlist" />
			) : (
				<section className={styles.wishlistProducts}>
					<div>
						<Button buttonText="Go Back to Shop" style="primary" linkPath="/products" />
					</div>
				</section>
			)}
		</>
	);
};

export default WishlistPage;
