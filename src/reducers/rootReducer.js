import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import dishes from './dishReducer';

export default combineReducers({
 categories,
 dishes
});
