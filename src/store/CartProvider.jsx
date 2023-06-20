import React from 'react';
import { useReducer } from 'react';
import cartContext from './cartContext';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, defaultCartState);

	function addItemHandler(item) {
		dispatch({ type: 'ADD', item: item });
	}

	function removeItemHandler(id) {}

	const CartContex = {
		items: state.items,
		totalAmount: state.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return (
		<cartContext.Provider value={CartContex}>{children}</cartContext.Provider>
	);
}

export default CartProvider;
