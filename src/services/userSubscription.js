const { HttpProvider } = require('../providers');

const baseEndpoint1 = '/user-subscripcion';

const getProfesionals = async () => {
  const response = await HttpProvider.get(baseEndpoint1 + `/profesionales`);
  return response;
};

export { getProfesionals };
