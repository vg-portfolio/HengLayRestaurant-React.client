import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case 'FETCH_DISHES':
   return {
     ...state,
    ..._.mapKeys(action.payload, "id")
   }
   case 'CREATE_DISH':
    return {
      ...state,
     [action.payload.id]: action.payload
    }
  default:
   return state
 }
}
