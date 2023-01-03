import BannerSlider from "../../components/BannerSlider/BannerSlider";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedProductsList from "../FeaturedProductsList/FeaturedProductsList";

const HomePage = () => {
	return (
		<>
			<BannerSlider />
			<FeaturedProductsList />
			<CategoryList />
		</>
	);
};

export default HomePage;
