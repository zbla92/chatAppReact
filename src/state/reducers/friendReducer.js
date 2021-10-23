/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';

import { GET_ONLINE_FRIENDS, GET_ALL_FRIENDS, GET_ALL_FRIENDS_FAIL, GET_ALL_FRIENDS_LOADING, FRIEND_CONNECTED, FRIEND_DISCONNECTED } from '../constants';
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
			const newState = { ...state };
			newState[payload.userId].online = true;
			return newState;
		}

		case FRIEND_DISCONNECTED: {
			const newState = { ...state };
			newState[payload.userId].online = false;
			return newState;
		}

		default:
			return state;
	}
};

export default combineReducers({ online });
