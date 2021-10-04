import { getMessagesService } from '../../services/messageService';

import { GET_MESSAGES_LOADING, RECEIVED_NEW_MESSAGE, SENT_NEW_MESSAGE } from '../constants';

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
			console.log('');
		} catch (error) {
			dispatch({ type: GET_MESSAGES_LOADING });
			const response = await getMessagesService({
				page,
				recipientId,
				senderId
			});
		}
	};
