const { HttpProvider } = require('../providers');

const baseEndpoint = '/auth';

const login = async (email, password) => {
  const response = await HttpProvider.post(baseEndpoint, {
    email,
    password
  });
  return response;
};
const loginWithToken = async token => {
  HttpProvider.setHeaderToken(token);
  const response = await HttpProvider.post(baseEndpoint);
  return response;
};
const logout = async () => {
  const response = await HttpProvider.deleted(baseEndpoint);
  return response;
};

export { login, loginWithToken, logout };
