import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
	text,
	onClick,
	disabled,
	secondary = false,
	medium = false,
	small = false,
	transpanent = false,
	icon,
}) => (
	<button
		className={classNames(styles.button, {
			[styles.disabled]: disabled,
			[styles.secondary]: secondary,
			[styles.transpanent]: transpanent,
			[styles.iconButton]: icon && !small,
			[styles.small]: small,
			[styles.medium]: medium,
		})}
		onClick={onClick}
	>
		{icon}
		{text}
	</button>
);

export default Button;
