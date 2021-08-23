import {
  GET_ONLINE_FRIENDS,
  RECEIVED_NEW_MESSAGE,
  SENT_NEW_MESSAGE,
} from '../constants';

export const getOnlineFriends = (friends, myEmail) => (dispatch) => {
  dispatch({
    type: GET_ONLINE_FRIENDS,
    payload: friends.filter((friend) => friend.userEmail !== myEmail),
  });
};

export const receivedNewMessage = (data) => (dispatch) => {
  dispatch({ type: RECEIVED_NEW_MESSAGE, payload: data });
};

export const sentNewMessage = (data) => (dispatch) => {
  dispatch({ type: SENT_NEW_MESSAGE, payload: data });
};
