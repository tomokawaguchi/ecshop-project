import { db } from "../firestore";
import { doc, collection, getDocs, getDoc, updateDoc, setDoc } from "firebase/firestore";

// To get all products from the database
export const getAllProducts = async () => {
	const collectionRef = collection(db, "products");
	const querySnapshot = await getDocs(collectionRef);

	const data = querySnapshot.docs.map((doc) => {
		const id = doc.id;
		const restOfData = doc.data();
		return { id, ...restOfData };
	});

	return data;
};

// To modify the product data - wishlist status
export const updateWishlist = async (id, status) => {
	const docRef = doc(db, "products", id);
	await updateDoc(docRef, {
		isInWishlist: status,
	});
};
