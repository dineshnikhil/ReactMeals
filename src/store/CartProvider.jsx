import React from 'react';
import { useReducer } from 'react';
import cartContext from './cartContext';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		var updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = state.items;
			updatedItems[existingCartItemIndex] = updateItem;
		}

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

	function removeItemHandler(id) {
		dispatch({ type: 'REMOVE', id: id });
	}

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
