import React from 'react';
import CartIcon from '../Cart/cartIcon';
import classes from './HeaderCartButtton.module.css';

function HeaderCartButton() {
	return (
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
}

export default HeaderCartButton;
