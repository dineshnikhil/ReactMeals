import { useState } from 'react';
import './App.css';
import CartProvider from './store/CartProvider';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
	const [isCartShown, setIsCartShown] = useState(false);

	function showCartHandler() {
		setIsCartShown(true);
	}

	function hideCartHandler() {
		setIsCartShown(false);
	}

	return (
		<CartProvider>
			{isCartShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
