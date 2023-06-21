import React from 'react';
import { useContext } from 'react';
import classes from './Cart.module.css';
import Model from '../UI/Model';
import cartContext from '../../store/cartContext';
import CartItem from './CartItem';

function Cart({ onHideCart }) {
	const cartCtx = useContext(cartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	function cartItemRemoveHandler(id) {}
	function cartItemAddHandler(item) {}

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => {
				return (
					<CartItem
						key={item.id}
						item={item}
						onRemove={cartItemRemoveHandler.bind(null, item.id)}
						onAdd={cartItemAddHandler.bind(null, item)}
					/>
				);
			})}
		</ul>
	);

	return (
		<Model onHideCart={onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Model>
	);
}

export default Cart;
