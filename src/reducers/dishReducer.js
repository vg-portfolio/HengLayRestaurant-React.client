export default (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_DISHES':
   return {
    ...state,
    ...action.payload
   }
  default:
   return state
 }
}
