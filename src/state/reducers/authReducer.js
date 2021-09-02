import { combineReducers } from 'redux';

import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGOUT_USER,
  GET_USER,
  GET_USER_LOADING,
  GET_USER_FAIL,
} from '../constants';

const authInitialState = { error: null, data: null, loading: false };

const tokens = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case LOGOUT_USER:
      return authInitialState;

    default:
      return state;
  }
};

const userDataInitialState = { error: null, data: null, loading: false };

const user = (state = userDataInitialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, data: action.payload, loading: false };

    case GET_USER_LOADING: {
      return { ...state, loading: true };
    }

    case GET_USER_FAIL:
      return { ...state, error: action.payload, loading: false };

    case LOGOUT_USER:
      return userDataInitialState;

    default:
      return state;
  }
};

export default combineReducers({ tokens, user });
