import { get, post, put, remove } from '../utils/service';

export const signInService = (params) => post('/user/login', params);

export const registerService = (params) => post('/user/create', params);

export const getAuthenticatedUserService = () => get(`/user/auth`);

export const logoutService = (id) => post(`/user/logout/${id}`);
