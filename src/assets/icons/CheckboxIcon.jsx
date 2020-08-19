/* eslint-disable max-len */
import React from 'react';

const CheckboxIcon = ({ isChecked }) => {
	if (isChecked) {
		return (
			<svg
				width='13'
				height='13'
				viewBox='0 0 13 13'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='13' height='13' fill='#0081CC' />
				<path d='M3 7L5.5 9.5L10 3' stroke='#F7F7F7' strokeLinecap='round' />
			</svg>
		);
	}

	return (
		<svg
			width='13'
			height='13'
			viewBox='0 0 13 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect x='0.5' y='0.5' width='12' height='12' stroke='#BFBFBF' />
		</svg>
	);
};

export default CheckboxIcon;
