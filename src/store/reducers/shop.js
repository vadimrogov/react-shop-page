import types from '../constants';

const initialState = {
	products: [],
	error: null,
	isLoading: false,
};

function shopReducer(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_PRODUCTS_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case types.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload.products,
				error: null,
				isLoading: false,
			};

		case types.FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				error: action.payload.error,
				isLoading: false,
			};

		case types.ADD_FAVORITE_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case types.ADD_FAVORITE_SUCCESS:
			const { product } = action.payload;
			return {
				...state,
				products: state.products.map((e) =>
					e.id === product.id ? { ...e, ...product } : e
				),
				error: null,
				isLoading: false,
			};

		case types.ADD_FAVORITE_FAILURE:
			return {
				...state,
				error: action.payload.error,
				isLoading: false,
			};

		case types.SET_FILTER_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case types.SET_FILTER_SUCCESS:
			return {
				...state,
				products: action.payload.products,
				error: null,
				isLoading: false,
			};

		case types.SET_FILTER_FAILURE:
			return {
				...state,
				error: action.payload.error,
				isLoading: false,
			};

		default:
			return state;
	}
}
export default shopReducer;
