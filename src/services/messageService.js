import { get, post, put, remove } from '../utils/service';

export const getMessages = (params) => get('/messages', params);
