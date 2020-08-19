import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux'

import styles from './ItemCard.module.scss';
import { addToFavorites } from '../../store/actions'

import Card from '../Card/Card';
import Button from '../Button/Button';
import CheckIcon from '../../assets/icons/CheckIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import ScalesIcon from '../../assets/icons/ScalesIcon';
import CartIcon from '../../assets/icons/CartIcon';

const ItemCard = ({product: { id, link, code, imgUrl, availability, title, params, inFav, inComparsion }}) => {
  const dispatch = useDispatch()
	const addToFavoritesReq = () => dispatch(addToFavorites(id))

	return (
	<Card classes={styles.cardItem} key={`${id}-${code}`}>
		<div className={styles.code}>{code}</div>
		<img
			className={styles.image}
			src={imgUrl}
			alt='something went wrong'
		/>
		<div className={styles.description}>
			<div>
				{availability && <CheckIcon />}
				<span
					className={classNames(styles.status, {
						[styles.statusAvailable]: availability,
					})}
				>
					{availability ? 'В наличии' : 'Нет в наличии'}
				</span>
			</div>
			<div className={styles.title}>{title}</div>
			{params?.map((e, i) => (
				<div key={`${id}-${i}`} className={styles.descriptionItem}>
					<span className={styles.descriptionItemName}>{e.name}: </span>
					<span className={styles.descriptionItemValue}>{e.value}</span>
				</div>
			))}
		</div>
		<div className={styles.buttonContainer}>
			<Button icon={<CartIcon />} text={'Купить'} medium />
			<div>
				<Button icon={<HeartIcon isChecked={inFav} />} onClick={addToFavoritesReq} small transpanent />
				<Button icon={<ScalesIcon isChecked={inComparsion} />} small transpanent />
			</div>
		</div>
	</Card>
);
}
export default ItemCard;
