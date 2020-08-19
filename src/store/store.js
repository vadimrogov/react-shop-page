import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import shopReducer from './reducers/shop';

export const configureStore = () => {
	const composer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

	return createStore(
		combineReducers({
			shopReducer,
		}),
		composer(applyMiddleware(thunk))
	);
};
