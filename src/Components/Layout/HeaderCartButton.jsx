import React from 'react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import CartIcon from '../Cart/cartIcon';
import classes from './HeaderCartButtton.module.css';
import cartContext from '../../store/cartContext';

function HeaderCartButton({ onShowCart }) {
	const [btnBump, setBtnBump] = useState(false);
	const cartCtx = useContext(cartContext);

	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnBump(true);

		const timer = setTimeout(() => {
			setBtnBump(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
}

export default HeaderCartButton;
