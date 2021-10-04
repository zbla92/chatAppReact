import { get, post, put, remove } from '../utils/service';

export const getMessagesService = (params) => get('/messages', params);
