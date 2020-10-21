import axios from 'axios';
import { AuthController } from '../controllers';

const get = (url, query = {}, body = {}) => {
  let queryString = '?';
  Object.keys(query).forEach(key => {
    queryString += `${key}=${query[key]}&`;
  });
  return new Promise((resolve, reject) => {
    axios
      .get(url + (queryString.length == 1 ? '' : queryString), body)
      .then(response => resolve(response.data))
      .catch(error => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.query = query;
        exception.body = body;
        reject(error);
      });
  });
};

const post = (url, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, body)
      .then(response => resolve(response.data))
      .catch(error => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.body = body;
        reject(exception);
      });
  });
};

const put = (url, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, body)
      .then(response => resolve(response.data))
      .catch(error => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.body = body;
        reject(exception);
      });
  });
};

const patch = (url, body) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, body)
      .then(response => resolve(response.data))
      .catch(error => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.body = body;
        reject(exception);
      });
  });
};

const deleted = (url, body) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, body)
      .then(response => resolve(response.data))
      .catch(error => {
        validateSessionCredentials(error);
        let exception = Object.assign(error);
        exception.body = body;
        reject(exception);
      });
  });
};
const validateSessionCredentials = error => {
  if (error.response && error.response.status == 401) {
    removeSessionCredentials();
    window.location.href = '/';
  }
};

const removeSessionCredentials = () => {
  AuthController.isAuthenticated = false;
  setHeaderToken('');
  localStorage.removeItem('token');
};

const setDefaultHeaders = () => {
  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  // axios.defaults.timeout = 2500;
  axios.defaults.headers.common['Authorization'] = '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['language'] = 'es';
};

const setHeaderToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

const setHeaderBaseURL = URL => {
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
  removeSessionCredentials
};
