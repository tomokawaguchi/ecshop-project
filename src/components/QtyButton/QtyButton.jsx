import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import styles from "./QtyButton.module.scss";

// Default handler for quantity in case we don't pass a handler prop
const defaultHandler = (quantity) => true;

const QtyButton = ({ initialQuantity, maxQuantity, onQuantityHandler = defaultHandler }) => {
	const [productQuantity, setProductQuantity] = useState(0);

	useEffect(() => {
		if (initialQuantity) {
			setProductQuantity(initialQuantity);
		}
	}, []);

	// Handle incrementing the qty
	const handleIncrement = () => {
		// Increment quantity
		setProductQuantity((prevQuantity) => {
			let updatedQuantity = prevQuantity + 1;
			if (updatedQuantity > maxQuantity) updatedQuantity = maxQuantity;

			onQuantityHandler(updatedQuantity);
			return updatedQuantity;
		});
	};

	// Handle decrementing the qty
	const handleDecrement = () => {
		// Decrement quantity
		setProductQuantity((prevQuantity) => {
			let updatedQuantity = prevQuantity - 1;
			if (updatedQuantity < 1) updatedQuantity = 1;

			onQuantityHandler(updatedQuantity);
			return updatedQuantity;
		});
	};

	return (
		<div className={styles.QtyButton}>
			<button onClick={handleDecrement} type="button">
				<FiMinus />
			</button>

			<span>{productQuantity}</span>

			<button onClick={handleIncrement} type="button">
				<FiPlus />
			</button>
		</div>
	);
};

export default QtyButton;
