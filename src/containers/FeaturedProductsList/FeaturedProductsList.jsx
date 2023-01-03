import { useContext, useState } from "react";
import { ProductsDataContext } from "../../context/ProductsDataContext";
import Button from "../../components/Button/Button";
import Product from "../../components/Product/Product";
import styles from "./FeaturedProductsList.module.scss";
import Slider from "react-slick";

const FeaturedProductsList = () => {
	const [index, setIndex] = useState(0);

	const { store, dispatch } = useContext(ProductsDataContext);
	const { products: allProducts } = store;
	const featuredProducts = allProducts.filter((product) => product.isFeatured);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	let settings = {
		dots: true,
		arrow: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className={styles.FeaturedProductsListSec}>
			<div className={styles.FeaturedProductsList}>
				<h2 className={styles.FeaturedProductsList_Title}>Featured Products</h2>

				<div>
					{featuredProducts.length ? (
						<Slider {...settings}>
							{featuredProducts.map((product) => (
								<Product data={product} dispatch={dispatch} key={product.id} />
							))}
						</Slider>
					) : (
						<p>No Featured Product Available</p>
					)}
				</div>
				<Button buttonText="See All Products" style="secondary" linkPath="/products" />
			</div>
		</section>
	);
};

export default FeaturedProductsList;
