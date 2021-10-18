/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import produce from 'immer';

import { GET_MESSAGES_LOADING, GET_MESSAGES_SUCCESS, RECEIVED_NEW_MESSAGE, SENT_NEW_MESSAGE } from '../constants';

const chatsInitialState = {};

const chats = (state = chatsInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECEIVED_NEW_MESSAGE: {
			let nextState = state;

			nextState = produce(state, draft => {
				if (state[payload.senderId]) {
					draft[payload.senderId].messages = [...state[payload.senderId].messages, payload];
				} else draft[payload.senderId] = { messages: [payload] };
			});

			return nextState;
		}
		case SENT_NEW_MESSAGE: {
			let nextState = state;

			nextState = produce(state, draft => {
				if (state[payload.recipientId]?.messages) {
					draft[payload.recipientId].messages = [...state[payload.recipientId].messages, payload];
				} else draft[payload.recipientId] = { messages: [payload] };
			});

			return nextState;
		}
		case GET_MESSAGES_SUCCESS: {
			const { maxPage, count, messages, recipientId, currentPage } = payload;
			const newState = { ...state };
			if (state[recipientId]?.messages) {
				newState[recipientId] = { messages: [...messages, ...state[recipientId].messages], count, maxPage, currentPage };
			} else newState[recipientId] = { messages, count, maxPage, currentPage };

			return newState;
		}

		default:
			return state;
	}
};

export default combineReducers({ chats });
