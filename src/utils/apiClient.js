/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import Cookies from 'js-cookie';

import { baseURL } from './helpers';

axios.interceptors.request.use(
	async configData => {
		const token = Cookies.get('access_token') || configData.token;
		if (token) {
			// eslint-disable-next-line no-param-reassign
			configData.headers.Authorization = `Bearer ${token}`;
		}
		return configData;
	},
	error => Promise.reject(error)
);

axios.interceptors.response.use(
	res => res,
	async err => {
		const originalConfig = err.config;

		if (originalConfig.url !== `${baseURL}/auth/user` && err.response) {
			// Access Token was expried
			if (err.response.status === 401 && !originalConfig._retry) {
				originalConfig._retry = true;

				try {
					const rs = await axios.post(`${baseURL}/auth/refresh`, {
						refreshToken: Cookies.get('refresh_token')
					});

					const { accessToken } = rs.data;
					Cookies.set('access_token', accessToken);

					return axios(originalConfig);
				} catch (_error) {
					return Promise.reject(_error);
				}
			}
		}
		return Promise.reject(err);
	}
);

const instance = (() => {
	const get = (url, params) => {
		if (params?.token) {
			return axios.get(`${baseURL}${url}`, params);
		}
		return axios.get(`${baseURL}${url}`);
	};

	const post = (url, params) => axios.post(`${baseURL}${url}`, params);

	const patch = (url, params) => axios.patch(`${baseURL}${url}`, params);

	const put = (url, params) => axios.put(`${baseURL}${url}`, params);

	const del = (url, params) => axios.delete(`${baseURL}${url}`, params);

	const upload = (url, params) =>
		axios.post(`${baseURL}${url}`, params, {
			headers: {
				'content-type': 'multipart/form-data'
			}
		});

	return {
		get,
		post,
		patch,
		put,
		del,
		upload
	};
})();

export default instance;
