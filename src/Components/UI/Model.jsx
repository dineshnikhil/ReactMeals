import React from 'react';
import classes from './Model.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

function Backdrop({ onHideCart }) {
	return <div className={classes.backdrop} onClick={onHideCart}></div>;
}

function Modeloverlay({ children }) {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
}

const protalElement = document.getElementById('overlays');

function Model({ children, onHideCart }) {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onHideCart={onHideCart} />,
				protalElement
			)}
			{ReactDOM.createPortal(
				<Modeloverlay>{children}</Modeloverlay>,
				protalElement
			)}
		</Fragment>
	);
}

export default Model;
