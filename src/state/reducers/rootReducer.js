import { combineReducers } from 'redux';

import auth from './authReducer';
import friends from './friendReducer';
import message from './messageReducer';

export default combineReducers({
  auth,
  friends,
  message,
});
