import { combineReducers } from 'redux';

import { LOGIN } from '../constants';

const loginUser = (state = { error: null, data: {} }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({ loginUser });
