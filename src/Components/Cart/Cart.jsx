import React from 'react';
import classes from './Cart.module.css';

function Cart() {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[
				{
					id: 'm1',
					name: 'Sushi',
					description: 'Finest fish and veggies',
					price: 22.99,
				},
			].map((item) => {
				return <li>{item.name}</li>;
			})}
		</ul>
	);

	return (
		<div>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>36.33</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Close</button>
				<button></button>
			</div>
		</div>
	);
}

export default Cart;
