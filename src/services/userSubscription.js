const { HttpProvider } = require('../providers');

const baseEndpoint1 = '/user-subscripcion';

const getProfesionals = async () => {
  const response = await HttpProvider.get(baseEndpoint1 + `/profesionales`);
  return response;
};
//cancela la subscripcion del usuario pago al postear una en el endpoint cancelar subscripcion
const cancelSubscription = async accountId => {
  const response = await HttpProvider.post(
    baseEndpoint1 + `/cancelar-subscripcion`,
    {
      accountId
    }
  );
  return response;
};
//renueva la subscripcion de los usuarios al postear en el end point renovar-subscripcion
const renovarSubscription = async accountId => {
  const response = await HttpProvider.post(
    baseEndpoint1 + `/renovar-subscripcion`,
    {
      accountId
    }
  );
  return response;
};
//pregunta si el usuario tiene subscripcion donde me devuelve un verdadero o falso dependiendo si posee subscripcion o no
const hasSubscription = async accountId => {
  const response = await HttpProvider.get(baseEndpoint1 + `/hasSubscription`, {
    accountId
  });
  return response;
};
export {
  getProfesionals,
  cancelSubscription,
  renovarSubscription,
  hasSubscription
};
