import axios from "axios";
import qs from "qs";

export const config = {
  baseURL: "http://localhost:4000",
};
const setHeaders = (headerToken) => {
  const headers = {};
  if (headerToken) {
    headers.Authorization = `Bearer ${headerToken}`;
  }
  return { headers };
};

const instance = (() => {
  const get = (url, params) => {
    const { token, ...rest } = params;
    const args = setHeaders(token);
    return axios.get(`${config.baseURL}${url}?${qs.stringify(rest)}`, args);
  };

  const post = (url, params) => {
    const { token, ...rest } = params;
    const args = setHeaders(token);
    return axios.post(`${config.baseURL}${url}`, rest, args);
  };

  const patch = (url, params) => {
    const args = setHeaders(params.token);
    return axios.patch(`${config.baseURL}${url}`, params, args);
  };

  const put = (url, params) => {
    const args = setHeaders(params.token);
    return axios.put(`${config.baseURL}${url}`, params, args);
  };

  const del = (url, params) => {
    const args = setHeaders(params.token);
    return axios.delete(`${config.baseURL}${url}`, { ...params, ...args });
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
