import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import dishes from './dishReducer';
import auth from './authReducer';
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
 categories,
 dishes,
 auth,
 form: formReducer
});
