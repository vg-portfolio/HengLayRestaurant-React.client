import _ from 'lodash';
export default (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_CATEGORIES':
   return {
    ...state,
    ..._.mapKeys(action.payload, "id")
   }
   case 'CREATE_CATEGORY':
    return {
     ...state,
     [action.payload.id]: action.payload
    }
  default:
   return state
 }
}
