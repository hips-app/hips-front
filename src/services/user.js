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
//pone una meta especifica con una fecha especifica que establece la completitud de esa meta S
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
// registra las calorias consumidas en la fecha especificada
const registerCalories = async (calories, date, accountId) => {
  const response = await HttpProvider.post('/nutrition/calories/' + accountId, {
    calories,
    date
  });
  return response;
};

const setProfilePicture = async urlPicture => {
  const response = await HttpProvider.post(baseEndpoint + `/profile-picture`, {
    urlPicture
  });
  return response;
};
const setSpecialist = async specialistId => {
  const response = await HttpProvider.post(baseEndpoint + `/specialist`, {
    specialistId
  });
  return response;
};
//devuelve el porcentaje que se a hecho de ejercicios 
const getpercent = async () => {
  const response = await HttpProvider.get(
    '/exercise/exercise-progress'
  );
  return response;
};
//recibe y envia el mensage de comunicacion con el experto
const enviarMensaje = async (message, accountId) => {
  const response = await HttpProvider.post('/comunicacion/experto', {
    message,
    accountId
  });
  return response;
};
export {
  register,
  updatePersonalData,
  registerGoal,
  getProfile,
  registerCalories,
  setProfilePicture,
  setSpecialist,
  getpercent,
  enviarMensaje
};
