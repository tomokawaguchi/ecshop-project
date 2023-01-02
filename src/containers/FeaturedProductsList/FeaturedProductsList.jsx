import { useContext, useState } from "react";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import Button from "../../components/Button/Button";
import Product from "../../components/Product/Product";
import styles from "./FeaturedProductsList.module.scss";
import Carousel from "react-bootstrap/Carousel";

const FeaturedProductsList = () => {
	const [index, setIndex] = useState(0);

	const { store, dispatch } = useContext(ProductsDataContext);
	const { products: allProducts } = store;
	const featuredProducts = allProducts.filter((product) => product.isFeatured);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<section className={styles.FeaturedProductsListSec}>
			<div className={styles.FeaturedProductsList}>
				<h2 className={styles.FeaturedProductsList_Title}>Featured Products</h2>

				<div className={styles.FeaturedProductsList_BottomWrapper}>
					{featuredProducts.length ? (
						<Carousel className="featured" controls={false} activeIndex={index} onSelect={handleSelect}>
							{featuredProducts.map((product) => (
								<Carousel.Item key={product.id}>
									<Product data={product} dispatch={dispatch} />
								</Carousel.Item>
							))}
						</Carousel>
					) : (
						<p>No Featured Product Available</p>
					)}
				</div>
				<Button className={styles.FeaturedProductsList_Button} buttonText="See All Products" style="secondary" linkPath="/products" />
			</div>
		</section>
	);
};

export default FeaturedProductsList;
