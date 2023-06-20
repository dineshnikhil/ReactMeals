import React from 'react';
import classes from './Cart.module.css';
import Model from '../UI/Model';

function Cart({ onHideCart }) {
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
		<Model onHideCart={onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>36.33</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Model>
	);
}

export default Cart;
