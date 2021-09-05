const currentUrl = window.location.href;

export const baseURL = currentUrl.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://chat-app-bcknd.herokuapp.com';

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};
