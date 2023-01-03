import { useContext } from "react";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import styles from "./Nav.module.scss";

const Nav = () => {
	const { store } = useContext(ProductsDataContext);
	const { productsInCart } = store;

	const iconNav = [styles.Nav_Link, styles.Nav_Link_Icon];
	const bagIconNav = productsInCart.length
		? [styles.Nav_Link, styles.Nav_Link_Active, styles.Nav_Link_Icon]
		: [styles.Nav_Link, styles.Nav_Link_Icon];

	return (
		<nav className={styles.Nav}>
			<NavLink to="/" className={styles.Nav_Link}>
				Home
			</NavLink>
			<NavLink to="/products" className={styles.Nav_Link}>
				Products
			</NavLink>
			<NavLink to="/wishlist" className={iconNav.join(" ")}>
				<IoHeartOutline />
			</NavLink>
			<NavLink to="/shopping-bag" className={bagIconNav.join(" ")}>
				<IoBagHandleOutline />
			</NavLink>
		</nav>
	);
};

export default Nav;
