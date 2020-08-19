import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, classes, ...props }) => (
	<div className={classNames(styles.card, classes)} {...props}>
		{children}
	</div>
);

export default Card;
