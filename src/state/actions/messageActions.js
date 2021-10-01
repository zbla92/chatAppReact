import { getMessages } from '../../services/messageService';

import { RECEIVED_NEW_MESSAGE, SENT_NEW_MESSAGE } from '../constants';

export const receivedNewMessage = (data) => (dispatch) => {
  dispatch({ type: RECEIVED_NEW_MESSAGE, payload: data });
};

export const sentNewMessage = (data) => (dispatch) => {
  dispatch({ type: SENT_NEW_MESSAGE, payload: data });
};
