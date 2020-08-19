import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Shop.module.scss';

import ItemCard from '../components/ItemCard/ItemCard';
import Sidebar from '../components/Sidebar/Sidebar';

import { fetchProducts } from '../store/actions';
import { getProducts, getError } from '../store/selectors';

const Shop = () => {
	const dispatch = useDispatch();
	const products = useSelector(getProducts);
	const error = useSelector(getError);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	useEffect(() => {
		if (error) console.error(error);
	}, [error]);

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{products.map((e) => (
					<ItemCard key={e.id} product={e} />
				))}
			</div>
			<Sidebar />
		</div>
	);
};

export default Shop;
