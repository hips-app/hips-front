import axios from 'axios'

const login = async (user, password) => {
  const response = await axios.post('/auth', { user: user, password: password })
  return response.data
}
const logout = async tok => {
  const response = await axios.post('/auth', { token: tok })
  return response.data
}
const currentUser = async () => {
  const response = await axios.post('/auth', { token: localStorage.token })
  return response.data
}
const regDatosSalud = async (preg1, preg2, preg3) => {
  try {
    await axios.post('/auth', {
      birthDay: preg1,
      heightInCentimeters: preg3,
      weightInKilograms: preg2
    })
    return true
  } catch (error) {
    return false
  }
}
const regMeta = async (preg1, preg2) => {
  try {
    await axios.post('/auth', {
      birthDay: preg1,
      weightInKilograms: preg2
    })
    return true
  } catch (error) {
    return false
  }
}

export { regMeta }
export { regDatosSalud }
export { login }
export { logout }
export { currentUser }
export default {}
