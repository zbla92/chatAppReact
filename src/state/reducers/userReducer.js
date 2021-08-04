import { combineReducers } from "redux";

import { LOGIN, LOGIN_FAIL } from "../constants";

const login = (state = { error: null, data: {} }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({ login });
