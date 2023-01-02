import { createContext, useEffect, useReducer } from "react";
import { getAllProducts } from "../services/products";
import { getAllItemsInBag } from "../services/shoppingBag";

export const ProductsDataContext = createContext();

/**
 * handleProductsUpdate function to update products in store
 *
 * @param {object} payload of the dispatch (that may include the product id, and product to update)
 * @param {array} products from previous state
 * @returns updated products
 */
const handleProductsUpdate = (payload, products) => {
	const { product } = payload;

	return payload?.id
		? products.map((currentProduct) => {
				if (currentProduct.id !== payload.id) {
					return currentProduct;
				}

				return {
					...currentProduct,
					...product,
				};
		  })
		: product;
};

// Initial state to contain products listing and products pushed into the shopping cart
const storeInitialState = {
	products: [],
	productsInCart: [],
};

export const actionTypes = {
	UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
	UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
	ADD_CART_ITEMS: "ADD_CART_ITEMS",
	REMOVE_CART_ITEMS: "REMOVE_CART_ITEMS",
};

const reducer = (state = storeInitialState, action) => {
	const { type, payload } = action;
	const { products: productsInStore, productsInCart } = state;

	switch (type) {
		case actionTypes.UPDATE_PRODUCTS:
			const updatedProductsInStore = handleProductsUpdate(payload, productsInStore);

			return {
				...state,
				products: [...updatedProductsInStore],
			};
		case actionTypes.UPDATE_CART_ITEMS:
			const updatedProductsInCart = handleProductsUpdate(payload, productsInCart);
			return {
				...state,
				productsInCart: [...updatedProductsInCart],
			};
		case actionTypes.ADD_CART_ITEMS:
			const newProduct = Array.isArray(payload.product) ? payload.product : [...state.productsInCart, payload.product];

			return {
				...state,
				productsInCart: newProduct,
			};
		case actionTypes.REMOVE_CART_ITEMS:
			const updatedProducts = productsInCart.filter((currentProduct) => currentProduct.id !== payload.id);

			return {
				...state,
				productsInCart: updatedProducts,
			};

		default:
			return state;
	}
};

const ProductDataProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, storeInitialState);

	// Fetching product data
	useEffect(() => {
		const wrapper = async () => {
			const allProducts = await getAllProducts();
			dispatch({
				type: actionTypes.UPDATE_PRODUCTS,
				payload: {
					product: allProducts,
				},
			});

			const productsInCart = await getAllItemsInBag();
			dispatch({
				type: actionTypes.ADD_CART_ITEMS,
				payload: {
					product: productsInCart,
				},
			});
		};

		wrapper();
	}, []);

	// Pass store data and dispatch to update store
	const data = { store, dispatch };

	return <ProductsDataContext.Provider value={data}>{children}</ProductsDataContext.Provider>;
};

export default ProductDataProvider;
