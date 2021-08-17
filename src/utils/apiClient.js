import axios from 'axios';
import Cookies from 'js-cookie';

import { baseURL } from '../utils/helpers';

axios.interceptors.request.use(
  async (configData) => {
    const token = Cookies.get('access_token') || configData.token;
    if (token) {
      // eslint-disable-next-line no-param-reassign
      configData.headers.Authorization = `Bearer ${token}`;
    }
    return configData;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const instance = (() => {
  const get = (url, params) => {
    if (params?.token) {
      return axios.get(`${baseURL}${url}`, params);
    }
    return axios.get(`${baseURL}${url}`);
  };

  const post = (url, params) => {
    return axios.post(`${baseURL}${url}`, params);
  };

  const patch = (url, params) => {
    return axios.patch(`${baseURL}${url}`, params);
  };

  const put = (url, params) => {
    return axios.put(`${baseURL}${url}`, params);
  };

  const del = (url, params) => {
    return axios.delete(`${baseURL}${url}`, params);
  };

  return {
    get,
    post,
    patch,
    put,
    del,
  };
})();

export default instance;
