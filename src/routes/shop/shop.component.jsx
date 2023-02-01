import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-previews.component";
import Category from "../category/category.component";

// import { ProductsContainer } from "./shop.styles.jsx";

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
