/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import produce from 'immer';

import { GET_MESSAGES_LOADING, GET_MESSAGES_SUCCESS, RECEIVED_NEW_MESSAGE, SENT_NEW_MESSAGE } from '../constants';

const chatsInitialState = {};

const chats = (state = chatsInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECEIVED_NEW_MESSAGE: {
			console.log('Reieived  message: ', payload);
			let nextState = state;

			nextState = produce(state, draft => {
				if (state[payload.senderId]) {
					draft[payload.senderId] = [...state[payload.senderId], payload];
				} else draft[payload.senderId] = [payload];
			});

			return nextState;
		}
		case SENT_NEW_MESSAGE: {
			console.log('sent message: ', payload);
			let nextState = state;

			nextState = produce(state, draft => {
				if (state[payload.recipientId]) {
					draft[payload.recipientId] = [...state[payload.recipientId], payload];
				} else draft[payload.recipientId] = [payload];
			});

			return nextState;
		}
		case GET_MESSAGES_SUCCESS: {
			const { maxPage, count, messages, recipientId } = payload;
			const newState = { ...state };
			newState[recipientId] = messages;
			return newState;
		}

		default:
			return state;
	}
};

export default combineReducers({ chats });
