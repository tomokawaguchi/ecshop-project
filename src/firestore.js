// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB8HDV3DxN9i9X6ZHLXGAevJBXvTxtepjI",
	authDomain: "nology-ecom-shop.firebaseapp.com",
	projectId: "nology-ecom-shop",
	storageBucket: "nology-ecom-shop.appspot.com",
	messagingSenderId: "116689167175",
	appId: "1:116689167175:web:c9e5cebc3e2a42e1c22262",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
