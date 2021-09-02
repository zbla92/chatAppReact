import { get, post, put, remove } from '../utils/service';

export const signInService = (params) => post('/auth/login', params);

export const registerService = (params) => post('/user/create', params);

export const getAuthenticatedUserService = () => get(`/auth/user`);

export const logoutService = (id) => post(`/auth/logout/${id}`);
