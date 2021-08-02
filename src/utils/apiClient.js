import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';

export const config = {
  baseURL: 'http://localhost:4000',
};

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
      return axios.get(`${config.baseURL}${url}`, params);
    }
    return axios.get(`${config.baseURL}${url}`);
  };

  const post = (url, params) => {
    return axios.post(`${config.baseURL}${url}`, params);
  };

  const patch = (url, params) => {
    return axios.patch(`${config.baseURL}${url}`, params);
  };

  const put = (url, params) => {
    return axios.put(`${config.baseURL}${url}`, params);
  };

  const del = (url, params) => {
    return axios.delete(`${config.baseURL}${url}`, params);
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
