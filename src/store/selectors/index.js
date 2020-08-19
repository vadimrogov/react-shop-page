import { createSelector } from 'reselect'
import { SHOP_MODULE_NAME } from '../constants'

const selectState = (state) => state[SHOP_MODULE_NAME]
export const getProducts = createSelector(selectState, state => state.products)
export const getError = createSelector(selectState, state => state.error)
