import { NavLink } from "react-bootstrap";
import styles from "./Product.module.scss";
import { useEffect, useState } from "react";
import { updateWishlist } from "../../services/products";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { productListener } from "../../services/listeners";
import { Link } from "react-router-dom";

const Product = ({ data, dispatch }) => {
	const { id, image, name, isInWishlist, price, category } = data;
	let [wishlistStatus, setWishlistStatus] = useState(isInWishlist);

	useEffect(() => {
		// Set listener for the data update
		const unsubscribe = productListener(id, dispatch);

		// Remove the listener
		return () => unsubscribe();
	}, []);

	// Handle wishlist button toggle function
	const handleToggle = async () => {
		// Update the state first
		setWishlistStatus(!wishlistStatus);

		// Update the database
		try {
			await updateWishlist(id, !wishlistStatus); // inverse boolean to be aligned with the current state
		} catch (e) {
			console.log(e, "Couldn't update the wishlist");
		}
	};

	return (
		<article className={styles.Product}>
			<Link to={`/products/${category}/${id}`} className={styles.Product_Link}>
				<div className={styles.Product_TopWrapper}>
					<img src={image} alt={name} className={styles.Product_Thumbnail} />
				</div>
			</Link>
			<div className={styles.Product_BottomWrapper}>
				<button className={styles.Product_HeartButton} onClick={handleToggle}>
					{wishlistStatus ? <IoHeart className={styles.Product_Icon} /> : <IoHeartOutline className={styles.Product_Icon} />}
				</button>
				<h3 className={styles.Product_Title}>{name}</h3>
				<p className={styles.Product_Price}>${price}</p>
			</div>
		</article>
	);
};

export default Product;
