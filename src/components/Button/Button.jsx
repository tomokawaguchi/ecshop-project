import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ buttonText, style, linkPath, handleClickAction, disabled = false }) => {
	const classes = style === "primary" ? [styles.Button] : [styles.Button, styles.Button_Secondary];
	return linkPath ? (
		<NavLink to={linkPath}>
			<button className={classes.join(" ")} disabled={disabled}>
				{buttonText}
			</button>
		</NavLink>
	) : (
		<button className={classes.join(" ")} onClick={handleClickAction} disabled={disabled}>
			{buttonText}
		</button>
	);
};

export default Button;
