import { get, post, put, remove } from '../utils/service';

export const getMessagesService = params => post('/messages', params);
