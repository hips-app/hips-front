const { HttpProvider } = require('../providers');

const baseEndpoint = '/pysical-exercises';

const getAll = async () => {
  const response = await HttpProvider.get(baseEndpoint);
  return response;
};

export { getAll };
