import Category from "../../components/Category/Category";
import mensThumbnail from "../../assets/images/mens-thumbnail.jpg";
import womensThumbnail from "../../assets/images/womens-thumbnail.jpg";
import kidsThumbnail from "../../assets/images/kids-thumbnail.jpg";

import styles from "./CategoryList.module.scss";

const CategoryList = () => {
	return (
		<section className={styles.CategoryListSec}>
			<div>
				<h2 className={styles.CategoryListSec_Title}>Browse By Category</h2>
				<div className={styles.CategoryList}>
					<Category img={mensThumbnail} title="Men's Socks" category="men" />
					<Category img={womensThumbnail} title="Women's Socks" category="women" />
					<Category img={kidsThumbnail} title="Kids' Socks" category="kids" />
				</div>
			</div>
		</section>
	);
};

export default CategoryList;
