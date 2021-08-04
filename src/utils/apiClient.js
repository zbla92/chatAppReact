import axios from 'axios';
import Cookies from 'js-cookie';

const currentUrl = window.location.href;

export const config = {
  baseURL: currentUrl.includes('localhost')
    ? 'http://localhost:4000'
    : 'https://chat-app-bcknd.herokuapp.com',
};

console.log(process.env.NODE_ENV);

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
