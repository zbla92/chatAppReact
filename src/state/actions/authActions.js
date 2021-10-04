import Cookies from 'js-cookie';

import { LOGIN, LOGIN_LOADING, REGISTER_USER, REGISTER_USER_FAIL, LOGIN_FAIL, REGISTER_USER_LOADING, GET_USER, GET_USER_FAIL, LOGOUT_USER } from '../constants';
import { signInService, registerService, getAuthenticatedUserService, logoutService } from '../../services/authService';

export const getUser = () => async dispatch => {
	try {
		const data = await getAuthenticatedUserService();
		dispatch({ type: GET_USER, payload: data.user });
	} catch (err) {
		dispatch({ type: GET_USER_FAIL, payload: err });
	}
};

export const loginUser = params => async dispatch => {
	try {
		dispatch({ type: LOGIN_LOADING });

		const data = await signInService(params);

		if (data?.accessToken) Cookies.set('access_token', data.accessToken);
		if (data?.refreshToken) Cookies.set('refresh_token', data.refreshToken);
		dispatch({ type: LOGIN, payload: data });

		dispatch(getUser());
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, payload: error });
		console.log('[ERROR][LOGIN_FAIL]: ', error);
	}
};

export const logoutUser = id => async dispatch => {
	try {
		await logoutService(id);

		dispatch({ type: LOGOUT_USER });
		Cookies.remove('access_token');
		Cookies.remove('refresh_token');
	} catch (err) {
		console.log(err);
	}
};

export const registerUser = (params, history) => async dispatch => {
	try {
		dispatch({ type: REGISTER_USER_LOADING });

		const data = await registerService(params);

		dispatch({ type: REGISTER_USER, payload: data });
		history.push('/sign-in');
	} catch (error) {
		dispatch({ type: REGISTER_USER_FAIL, payload: error.data });
		console.log('[ERROR][REGISTER_USER_FAIL]: ', error);
	}
};
