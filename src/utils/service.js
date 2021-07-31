import Api from "./apiClient";

const handleError = (error) => {
  if (error?.response) {
    throw error.response.data;
  } else {
    throw error;
  }
};

export const get = async (url, params = {}) => {
  try {
    const response = await Api.get(url, params);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const post = async (url, postData = {}) => {
  try {
    const response = await Api.post(url, postData);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const patch = async (url, patchData = {}) => {
  try {
    const response = await Api.patch(url, patchData);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const put = async (url, params = {}) => {
  try {
    const response = await Api.put(url, params);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const remove = async (url, deleteData = {}) => {
  try {
    const response = await Api.del(url, deleteData);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
