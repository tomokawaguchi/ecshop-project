import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import styles from "./Header.module.scss";

const Header = ({ isFreeShipping }) => {
	isFreeShipping = true;

	return (
		<header className={styles.Header}>
			{isFreeShipping && (
				<div className={styles.SaleBelt}>
					<p>Free Shipping For Orders Over $50</p>
				</div>
			)}
			<div>
				<NavLink to="/" className={styles.Header_Logo}>
					JOLLY SOCKS
				</NavLink>

				<Nav />
			</div>
		</header>
	);
};

export default Header;
