import { combineReducers } from 'redux';

import {
  GET_ONLINE_FRIENDS,
  GET_ALL_FRIENDS,
  GET_ALL_FRIENDS_FAIL,
  GET_ALL_FRIENDS_LOADING,
  FRIEND_CONNECTED,
  FRIEND_DISCONNECTED,
} from '../constants';
import { mergeDeep } from '../../utils/helpers';

const onlineInitialState = {};

const online = (state = onlineInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_FRIENDS: {
      return payload;
    }

    case GET_ONLINE_FRIENDS: {
      return mergeDeep(payload, state);
    }

    case FRIEND_CONNECTED: {
      state[payload.userId].online = true;
      return state;
    }

    case FRIEND_DISCONNECTED: {
      state[payload.userId].online = false;
      return state;
    }

    default:
      return state;
  }
};

export default combineReducers({ online });
