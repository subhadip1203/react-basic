import { combineReducers } from 'redux';
import authReducer from './auth/reducer';

const mainreducer = combineReducers({
  auth: authReducer,
});

export default mainreducer;
