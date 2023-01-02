import { db } from "../firestore";
import { doc, collection, getDocs, addDoc, deleteDoc, setDoc } from "firebase/firestore";

// Adding a new product - create
export const addProductToBag = async (data) => {
	const { color, id, name, price, qtySelected, size, category, image } = data;
	const item = { color, id, name, price, qtySelected, size, category, image };
	const docRef = doc(db, "shoppingBag", id);
	await setDoc(docRef, item);
};

// Get all the products in the shoppingBag collection
export const getAllItemsInBag = async () => {
	const collectionRef = collection(db, "shoppingBag");
	const querySnapshot = await getDocs(collectionRef);

	const data = querySnapshot.docs.map((doc) => {
		const id = doc.id;
		const restOfData = doc.data();
		return { id, ...restOfData };
	});

	return data;
};

// Deleting the product from the shopping bag
export const deleteProduct = async (id) => {
	const docRef = doc(db, "shoppingBag", id);
	await deleteDoc(docRef);
};
