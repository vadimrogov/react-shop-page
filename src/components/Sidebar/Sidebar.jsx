import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styles from './Sidebar.module.scss';

import Card from '../Card/Card';
import Button from '../Button/Button';
import CheckBox from '../Checkbox/Checkbox';

import { setFilter, fetchProducts } from '../../store/actions'

const filterItems = [
	'Дерево',
	'Гипс',
	'Нержавеющая сталь',
	'Акрил',
	'Металл',
	'Бумага',
];

const Sidebar = () => {
  const dispatch = useDispatch()
	const [state, setState] = useState([]);

	const onChangeHandler = (value) => () => {
		const items = [...state]
    items.includes(value) ? items.splice(items.indexOf(value), 1) : items.push(value)
		setState(items)
	}

	const setFilterReq = () => dispatch(setFilter(state))
	const resetFilterReq = () => {
		setState([])
		dispatch(fetchProducts())
	}

	return (
		<Card classes={styles.card}>
			<div className={styles.container}>
				<Button text={'Показать результат'} onClick={setFilterReq} disabled={!state.length} />
				<Button text={'Очистить фильтр'} onClick={resetFilterReq} secondary />
				<div className={styles.title}>Материал</div>
				<div className={styles.items}>
					{filterItems.map((e) => (
						<CheckBox
							key={e}
							checked={state.includes(e)}
							onChange={onChangeHandler(e)}
							labelText={e}
						/>
					))}
				</div>
			</div>
		</Card>
	);
};

export default Sidebar;
