import axios from 'axios';
import { AuthModel } from '../models';

const get = (url, query = {}, params = {}) => {
  let queryString = '?';
  Object.keys(query).forEach((key) => {
    queryString += `${key}=${query[key]}&`;
  });
  return new Promise((resolve, reject) => {
    axios
      .get(url + (queryString.length == 1 ? '' : queryString), params)
      .then((response) => resolve(response.data))
      .catch((error) => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.query = query;
        exception.data = params;
        reject(error);
      });
  });
};

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => resolve(response.data))
      .catch((error) => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

const put = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((response) => resolve(response.data))
      .catch((error) => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

const patch = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data)
      .then((response) => resolve(response.data))
      .catch((error) => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

const deleted = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data)
      .then((response) => resolve(response.data))
      .catch((error) => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};
const validateSessionCredentials = (error) => {
  if (error.response && error.response.status == 401) {
    removeSessionCredentials();
    window.location.href = '/login';
  }
};

const removeSessionCredentials = () => {
  AuthModel.isAuthenticated = false;
  setHeaderToken('');
  localStorage.removeItem('authentication_token');
};

const setDefaultHeaders = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  // axios.defaults.timeout = 2500;
  axios.defaults.headers.common['Authorization'] = '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['language'] = 'es';
};

const setHeaderToken = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
};

const setHeaderBaseURL = (URL) => {
  axios.defaults.baseURL = URL;
};

export default {
  get,
  post,
  put,
  patch,
  deleted,
  setDefaultHeaders,
  setHeaderToken,
  setHeaderBaseURL,
  removeSessionCredentials,
};
