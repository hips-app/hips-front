import axios from 'axios'

const login = async (user, password) => {
  const response = await axios.post('/auth', { user: user, password: password })
  return response.data
}
const logout = async () => {
  const response = await axios.post('/auth')
  return response.data
}
const currentUser = async (token) => {
  const response = await axios.post('/auth', {token: token})
  return response.data
}
export { login }
export { logout }
export { currentUser }
