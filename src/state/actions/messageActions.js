import { getMessagesService } from '../../services/messageService';

import { GET_MESSAGES_LOADING, RECEIVED_NEW_MESSAGE, SENT_NEW_MESSAGE, GET_MESSAGES_FAIL, GET_MESSAGES_SUCCESS } from '../constants';

export const receivedNewMessage = data => dispatch => {
	dispatch({ type: RECEIVED_NEW_MESSAGE, payload: data });
};

export const sentNewMessage = data => dispatch => {
	dispatch({ type: SENT_NEW_MESSAGE, payload: data });
};

export const getMessages =
	({ page, recipientId, senderId }) =>
	async dispatch => {
		try {
			dispatch({ type: GET_MESSAGES_LOADING });
			const response = await getMessagesService({
				page,
				recipientId,
				senderId
			});

			const { maxPage, count, messages } = response.data;
			dispatch({ type: GET_MESSAGES_SUCCESS, payload: { maxPage, count, messages, recipientId } });
		} catch (error) {
			console.log(error);
			dispatch({ type: GET_MESSAGES_FAIL });
		}
	};
