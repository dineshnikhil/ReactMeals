import React from 'react';
import { useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm({ id }) {
	const amountInputRef = useRef();
	function submitFormHandler(event) {
		event.preventDefault();
	}
	return (
		<form className={classes.form}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount_' + id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+Add</button>
		</form>
	);
}

export default MealItemForm;
