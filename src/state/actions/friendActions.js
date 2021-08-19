import { GET_ONLINE_FRIENDS } from '../constants';

export const getOnlineFriends = (friends, myEmail) => (dispatch) => {
  dispatch({
    type: GET_ONLINE_FRIENDS,
    payload: friends.filter((friend) => friend.userEmail !== myEmail),
  });
};
