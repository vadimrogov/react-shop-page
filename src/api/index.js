const BASE_NAME = 'https://my-json-server.typicode.com/aero-frontend/test-task'

export const getProductListUrl = () => `${BASE_NAME}/PRODUCTS_SUCCESS`
export const getAddToFavoriteUrl = (status = 'SUCCESS') => `${BASE_NAME}/FAVORITE_${status}`
export const getSetFilterUrl = (status = 'SUCCESS') => `${BASE_NAME}/FILTER_${status}`