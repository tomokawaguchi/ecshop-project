import SubpageBanner from "../../components/SubpageBanner/SubpageBanner";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";

const AllProductsPage = () => {
	const { category } = useParams();
	const title = category !== undefined ? `All Products from ${category}` : "All Products";
	return (
		<>
			<SubpageBanner pageTitle={title} />
			<ProductList category={category} />
		</>
	);
};

export default AllProductsPage;
