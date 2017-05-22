import axios from 'axios';
export const REQUEST_GET_URL = 'https://search.testapp123.com/search-result';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_LAYOUT = 'SET_LAYOUT';
export const reponseGetProduct = (searchParams, products) => ({
  type: GET_PRODUCTS,
  products: products,
  searchParams: searchParams,
})
export const setLayout = (layout) => ({
  type: SET_LAYOUT,
  layout: layout,
})

export const fetchProducts = searchParams => dispatch => {
  console.log("SEARCH_PARAMS: ", searchParams)
  return axios.get( REQUEST_GET_URL, { params: searchParams } )
    .then(response => {
      console.log("fetchProducts", searchParams, response.data)
      return dispatch(reponseGetProduct(searchParams, response.data))
    })
    .catch(err => {
      console.error(err)
      throw new Error(err)
    });
}
