import { combineReducers } from 'redux';

import user from './userReducer';
import friends from './friendReducer';

export default combineReducers({
  user,
  friends,
});
