import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage/HomePage";
import WishlistPage from "./containers/WishlistPage/WishlistPage";
import AllProductsPage from "./containers/AllProductsPage/AllProductsPage";
import ShoppingBagPage from "./containers/ShoppingBagPage/ShoppingBagPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import ProductDataProvider from "./context/ProductsDataContext";

import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<ProductDataProvider>
					<Header />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/wishlist" element={<WishlistPage />} />

						<Route path="/products" element={<AllProductsPage />} />
						<Route path="/products/:category" element={<AllProductsPage />} />
						<Route path="/products/:category/:productId" element={<ProductPage />} />

						<Route path="/shopping-bag" element={<ShoppingBagPage />} />
					</Routes>

					<footer className={styles.Footer}>
						<span>© 2022 Tomo</span>
					</footer>
				</ProductDataProvider>
			</div>
		</BrowserRouter>
	);
};

export default App;
