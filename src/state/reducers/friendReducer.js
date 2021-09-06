import { combineReducers } from 'redux';
import produce from 'immer';

import {
  GET_ONLINE_FRIENDS,
  RECEIVED_NEW_MESSAGE,
  SENT_NEW_MESSAGE,
  GET_ALL_FRIENDS,
  GET_ALL_FRIENDS_FAIL,
  GET_ALL_FRIENDS_LOADING,
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

    default:
      return state;
  }
};

const chatsInitialState = {};

const chats = (state = chatsInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVED_NEW_MESSAGE: {
      let nextState = state;

      nextState = produce(state, (draft) => {
        if (state[payload.from]) {
          draft[payload.from] = [...state[payload.from], payload];
        } else draft[payload.from] = [payload];
      });

      return nextState;
    }
    case SENT_NEW_MESSAGE: {
      let nextState = state;
      console.log(nextState, 'next state');
      nextState = produce(state, (draft) => {
        if (state[payload.to]) {
          draft[payload.to] = [...state[payload.to], payload];
        } else draft[payload.to] = [payload];
      });

      return nextState;
    }
    default:
      return state;
  }
};

export default combineReducers({ online, chats });
