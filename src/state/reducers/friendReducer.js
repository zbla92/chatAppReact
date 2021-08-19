import { combineReducers } from 'redux';

import { GET_ONLINE_FRIENDS } from '../constants';

const onlineInitialState = [];

const online = (state = onlineInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ONLINE_FRIENDS:
      console.log(payload);
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ online });
