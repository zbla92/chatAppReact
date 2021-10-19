import { getAllFriendsService, getOnlineFriendsService } from '../../services/friendService';
import { convertArrayToObject } from '../../utils/helpers';
import {
	GET_ALL_FRIENDS,
	GET_ALL_FRIENDS_FAIL,
	GET_ONLINE_FRIENDS,
	GET_ONLINE_FRIENDS_FAIL,
	RECEIVED_NEW_MESSAGE,
	SENT_NEW_MESSAGE,
	FRIEND_CONNECTED,
	FRIEND_CONNECTED_FAIL,
	FRIEND_DISCONNECTED,
	FRIEND_DISCONNECTED_FAIL
} from '../constants';

// export const getOnlineFriends = (friends, myEmail) => (dispatch) => {
//   dispatch({
//     type: GET_ONLINE_FRIENDS,
//     payload: friends.filter((friend) => friend.userEmail !== myEmail),
//   });
// };

export const receivedNewMessage = data => dispatch => {
	dispatch({ type: RECEIVED_NEW_MESSAGE, payload: data });
};

export const sentNewMessage = data => dispatch => {
	dispatch({ type: SENT_NEW_MESSAGE, payload: data });
};

export const getOnlineFriends = userId => async dispatch => {
	try {
		const response = await getOnlineFriendsService();
		delete response.data[userId];
		dispatch({ type: GET_ONLINE_FRIENDS, payload: response.data });
	} catch (err) {
		console.log('[ERROR][FRIEND] -- ', err);
		dispatch({ type: GET_ONLINE_FRIENDS_FAIL });
	}
};

export const getAllFriends = userId => async dispatch => {
	try {
		const response = await getAllFriendsService();
		const arrayOfFriends = convertArrayToObject(response.data, 'id');
		delete arrayOfFriends[userId];
		dispatch({ type: GET_ALL_FRIENDS, payload: arrayOfFriends });
		dispatch(getOnlineFriends(userId));
	} catch (err) {
		console.log('[ERROR][FRIEND] -- ', err);
		dispatch({ type: GET_ALL_FRIENDS_FAIL });
	}
};

export const friendConnected = userData => async dispatch => {
	try {
		dispatch({ type: FRIEND_CONNECTED, payload: userData });
	} catch (err) {
		console.log('[ERROR][FRIEND_CONNECTED] -- ', err);
		dispatch({ type: FRIEND_CONNECTED_FAIL });
	}
};

export const friendDisconnected = userData => async dispatch => {
	try {
		dispatch({ type: FRIEND_DISCONNECTED, payload: userData });
	} catch (err) {
		console.log('[ERROR][FRIEND_CONNECTED] -- ', err);
		dispatch({ type: FRIEND_DISCONNECTED_FAIL });
	}
};
