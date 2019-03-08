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

export const createDish = dish => async (dispatch, getState) => {
  const token = getState().auth.user.token;
  return api.post('/dishes',
    { dish },
    {
      headers: {
        "Authorization": `Token token=${token}`
      }
    })
  .then((response) => {
    dispatch({
      type: 'CREATE_DISH',
      payload: response.data.dish
    })
  })
}

export const createCategory = category => async (dispatch, getState) => {
  const token = getState().auth.user.token;
  return api.post('/categories',
    { category },
    {
      headers: {
        "Authorization": `Token token=${token}`
      }
    })
  .then((response) => {
    dispatch({
      type: 'CREATE_CATEGORY',
      payload: response.data.category
    })
  })
}

export const signIn = credentials => async dispatch => {
  return api.post('/sign-in', {credentials})
  .then((response) => {
    dispatch({
      type: 'SIGN_IN',
      payload: response.data
    })
  })
}
