import React from 'react';
import { useContext } from 'react';
import CartIcon from '../Cart/cartIcon';
import classes from './HeaderCartButtton.module.css';
import cartContext from '../../store/cartContext';

function HeaderCartButton({ onShowCart }) {
	const cartCtx = useContext(cartContext);

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
}

export default HeaderCartButton;
