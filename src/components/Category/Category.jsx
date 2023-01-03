import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

const Category = ({ img, title, category }) => {
	return (
		<Link to={`products/${category}`} className={styles.Category}>
			<img src={img} alt="cat thumbnail" className={styles.Category_Thumbnail} />
			<h3 className={styles.Category_Title}>{title}</h3>
		</Link>
	);
};

export default Category;
