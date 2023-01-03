import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import Button from "../Button/Button";
import styles from "./BannerSlider.module.scss";

const BannerSlider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<section className={styles.BannerSlider}>
			<div>
				<Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img className="d-block w-200" src={banner1} alt="Christmas socks" />
						<Carousel.Caption className={styles.BannerSlider_Caption}>
							<h2>
								Perfect Gift For <span className={styles.BannerSlider_Caption_Break}></span>Your Loved One
							</h2>
							<Button buttonText="See Product" style="primary" linkPath="/products" />
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-200" src={banner2} alt="Christmas socks" />
						<Carousel.Caption className={styles.BannerSlider_Caption}>
							<h2>Get Comfortable With Your favorites</h2>
							<Button buttonText="Find Your Favourite" style="primary" linkPath="/products" />
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</section>
	);
};

export default BannerSlider;
