import axios from "axios";

const api = axios.create({
  // baseURL: "https://opentixapi.herokuapp.com/"
  baseURL: "http://localhost:4741/"
  //Place TOKEN in redux state instead
  //Relocate this auth header to somehwere else;
});

export const fetchCategories = () => async dispatch => {
  return api.get('/categories')
  .then((response) => {
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: response.data.categories
    })
  })
}

export const fetchAllDishes= () => async dispatch => {
  return api.get('/dishes')
  .then((response) => {
    dispatch({
      type: 'FETCH_DISHES',
      payload: response.data.dishes
    })
  })
}
