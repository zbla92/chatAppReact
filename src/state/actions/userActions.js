import { LOGIN } from '../constants';
import { signInService } from '../../services/userService';
import Cookies from 'js-cookie';

export const loginUser = (params, history) => async (dispatch) => {
  try {
    const data = await signInService(params);
    if (data?.accessToken) Cookies.set('access_token', data.accessToken);
    if (data?.refreshToken) Cookies.set('refreshToken', data.refreshToken);
    dispatch({ type: LOGIN, payload: data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
