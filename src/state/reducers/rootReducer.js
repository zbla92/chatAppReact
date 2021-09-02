import { combineReducers } from 'redux';

import auth from './authReducer';
import friends from './friendReducer';

export default combineReducers({
  auth,
  friends,
});
