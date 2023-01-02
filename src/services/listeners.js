import { db } from "../firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { actionTypes } from "../context/ProductsDataContext";

// For the product collection listener
export const productListener = (id, dispatch) => {
	const docRef = doc(db, "products", id);
	const unsubscribe = onSnapshot(docRef, (doc) => {
		const updatedProduct = doc.data();

		dispatch({
			type: actionTypes.UPDATE_PRODUCTS,
			payload: {
				id,
				product: updatedProduct,
			},
		});
	});

	return unsubscribe;
};

// For the shoppingBag collection listener
export const shoppingBagListener = (id, dispatch) => {
	const docRef = doc(db, "shoppingBag", id);
	const unsubscribe = onSnapshot(docRef, (doc) => {
		const updatedShoppingBag = doc.data();

		dispatch({
			type: actionTypes.UPDATE_CART_ITEMS,
			payload: {
				id,
				product: updatedShoppingBag,
			},
		});
	});

	return unsubscribe;
};
