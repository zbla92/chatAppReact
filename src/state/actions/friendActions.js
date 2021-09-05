import { getAllFriendsService } from '../../services/friendService';
import {
  GET_ALL_FRIENDS,
  GET_ALL_FRIENDS_FAIL,
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

export const getAllFriends = () => async (dispatch) => {
  try {
    const response = await getAllFriendsService();
    dispatch({ type: GET_ALL_FRIENDS, payload: response.data });
  } catch (err) {
    console.log('[ERROR][FRIEND] -- ', err);
    dispatch({ type: GET_ALL_FRIENDS_FAIL });
  }
};
