import _ from 'lodash';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case 'FETCH_CATEGORIES':
  console.log("CATE", action.payload)
   return {
    ...state,
    ..._.mapKeys(action.payload, "id")
   }
   case 'CREATE_CATEGORY':
   console.log("CREATE", action.payload)
    return {
     ...state,
     [action.payload.id]: action.payload
    }
  default:
   return state
 }
}
