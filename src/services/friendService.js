import { get, post, put, remove } from '../utils/service';

export const getAllFriendsService = () => get('/user/');

export const getOnlineFriendsService = () => get('/friends/online');
