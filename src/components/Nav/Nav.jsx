import { useContext } from "react";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import styles from "./Nav.module.scss";

const Nav = () => {
	const { store } = useContext(ProductsDataContext);
	const { productsInCart } = store;

	const textNav = [styles.Nav_Link, styles.Nav_Link_Text];
	const iconNav = [styles.Nav_Link, styles.Nav_Link_Icon];
	const bagIconNav = productsInCart.length
		? [styles.Nav_Link, styles.Nav_Link_Active, styles.Nav_Link_Icon]
		: [styles.Nav_Link, styles.Nav_Link_Icon];

	return (
		<nav className={styles.Nav}>
			<NavLink to="/" className={textNav.join(" ")}>
				Home
			</NavLink>
			<NavLink to="/products" className={textNav.join(" ")}>
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
