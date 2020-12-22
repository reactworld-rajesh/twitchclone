import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formreducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formreducer
});
