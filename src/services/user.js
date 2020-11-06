const { HttpProvider } = require('../providers');

const baseEndpoint = '/users';

const register = async (firstName, lastName, email, password) => {
  const response = await HttpProvider.post(baseEndpoint, {
    firstName,
    lastName,
    email,
    password
  });
  return response;
};
const updatePersonalData = async (
  firstName,
  lastName,
  weightInKilograms,
  heightInCentimeters,
  birthDate
) => {
  const response = await HttpProvider.patch(baseEndpoint + '/personal-data', {
    firstName,
    lastName,
    birthDate,
    weightInKilograms,
    heightInCentimeters
  });
  return response;
};
const registerGoal = async (description, expirationDate) => {
  const response = await HttpProvider.post(baseEndpoint + '/goals', {
    description,
    expirationDate
  });
  return response;
};
const getProfile = async accountId => {
  const response = await HttpProvider.get(
    baseEndpoint + `/${accountId}/profile`
  );
  return response;
};
const registerCalories = async (calories, date, accountId) => {
  const response = await HttpProvider.post('/nutrition/calories/' + accountId, {
    calories,
    date
  });
  return response;
};
export {
  register,
  updatePersonalData,
  registerGoal,
  getProfile,
  registerCalories
};