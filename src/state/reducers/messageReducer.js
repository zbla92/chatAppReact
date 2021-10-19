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
				const { senderId } = payload;

				if (state[senderId]) {
					draft[senderId].messages.push(payload);
					draft[senderId].messagesOffset += 1;
				} else draft[senderId] = { messages: [payload], messagesOffset: 1 };
			});

			return nextState;
		}
		case SENT_NEW_MESSAGE: {
			let nextState = state;

			nextState = produce(state, draft => {
				const { recipientId } = payload;
				if (state[recipientId]?.messages) {
					draft[recipientId].messages.push(payload);
					draft[recipientId].messagesOffset += 1;
				} else draft[recipientId] = { messages: [payload], messagesOffset: 1 };
			});

			return nextState;
		}
		case GET_MESSAGES_SUCCESS: {
			const { maxPage, count, messages, recipientId, messagesOffset, currentPage } = payload;
			const newState = { ...state };
			if (state[recipientId]?.messages) {
				newState[recipientId] = { messages: [...messages, ...state[recipientId].messages], count, maxPage, currentPage, messagesOffset };
			} else newState[recipientId] = { messages, count, maxPage, currentPage, messagesOffset };

			return newState;
		}

		default:
			return state;
	}
};

export default combineReducers({ chats });
