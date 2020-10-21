import { HttpProvider } from '../providers';

const login = async (user, password) => {
  const response = await HttpProvider.post('/auth', {
    user: user,
    password: password
  });
  return response.data;
};
const logout = async () => {
  const response = await HttpProvider.deleted('/auth');
  return response.data;
};
const currentUser = async token => {
  HttpProvider.setHeaderToken(token);
  const response = await HttpProvider.post('/auth');
  return response.data;
};

export { login };
export { logout };
export { currentUser };
