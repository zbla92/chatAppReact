import { combineReducers } from 'redux';
import produce from 'immer';

import { RECEIVED_NEW_MESSAGE, SENT_NEW_MESSAGE } from '../constants';

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

export default combineReducers({ chats });
