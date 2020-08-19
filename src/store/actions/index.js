import axios from 'axios';
import CONSTANTS from '../constants';
import { getProductListUrl, getAddToFavoriteUrl, getSetFilterUrl } from '../../api';

export const fetchProductsRequest = () => ({
	type: CONSTANTS.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
	type: CONSTANTS.FETCH_PRODUCTS_SUCCESS,
	payload: { products },
});

export const fetchProductsFailure = (error) => ({
	type: CONSTANTS.FETCH_PRODUCTS_FAILURE,
	payload: { error },
});

export const fetchProducts = () => async (dispatch) => {
	try {
		dispatch(fetchProductsRequest());
		const response = await axios.get(getProductListUrl());

		if (response.status === 200) {
			const { products } = response.data.data;

			dispatch(fetchProductsSuccess(products));
		}
	} catch (error) {
		dispatch(fetchProductsFailure(error));
	}
};

export const addToFavoritesRequest = () => ({
	type: CONSTANTS.ADD_FAVORITE_REQUEST,
});

export const addToFavoritesSuccess = (product) => ({
	type: CONSTANTS.ADD_FAVORITE_SUCCESS,
	payload: { product },
});

export const addToFavoritesFailure = (error) => ({
	type: CONSTANTS.ADD_FAVORITE_FAILURE,
	payload: { error },
});

export const addToFavorites = (id) => async (dispatch) => {
	try {
		dispatch(addToFavoritesRequest());
		const response = await axios.get(getAddToFavoriteUrl());

		if (response.status === 200) {
			const { inFav } = response.data.data;
      if(inFav === undefined) throw Error(response.data.data.message)

			dispatch(addToFavoritesSuccess({ inFav, id }));
		}
	} catch (error) {
		dispatch(addToFavoritesFailure(error));
	}
};

export const setFilterRequest = () => ({
	type: CONSTANTS.FETCH_PRODUCTS_REQUEST,
});

export const setFilterSuccess = (products) => ({
	type: CONSTANTS.FETCH_PRODUCTS_SUCCESS,
	payload: { products },
});

export const setFilterFailure = (error) => ({
	type: CONSTANTS.FETCH_PRODUCTS_FAILURE,
	payload: { error },
});

export const setFilter = (data) => async (dispatch) => {
	try {
		dispatch(setFilterRequest());
		const response = await axios.get(getSetFilterUrl());

		if (response.status === 200) {
			const { products } = response.data.data;
      if(products === undefined) throw Error(response.data.data.message)

			dispatch(setFilterSuccess(products));
		}
	} catch (error) {
		dispatch(setFilterFailure(error));
	}
};
