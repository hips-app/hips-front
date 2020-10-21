const { HttpProvider } = require('../providers');

const baseEndpoint = '/auth';

const login = async (email, password) => {
  const response = await HttpProvider.post(baseEndpoint, {
    email,
    password
  });
  return response;
};
const loginWithGoogle = async (email, uid) => {
  const response = await HttpProvider.post(
    baseEndpoint + '/login-with-google',
    {
      email,
      uid
    }
  );
  return response;
};
const loginWithToken = async token => {
  HttpProvider.setHeaderToken(token);
  const response = await HttpProvider.post(baseEndpoint + '/login-with-token');
  return response;
};
const logout = async () => {
  const response = await HttpProvider.deleted(baseEndpoint);
  return response;
};

export { login, loginWithGoogle, loginWithToken, logout };
