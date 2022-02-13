const APPLICATION = 'application/json';

const getAllIndicators = () => {
  const endpoint = 'http://localhost:3001/indicadores';
  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': APPLICATION,
    },
  })
    .then((response) => response.json())
    .then((data) => data)

    .catch((err) => err);

  return responses;
};

const getAllSimulators = (indexacao, rendimento) => {
  const endpoint = `http://localhost:3001/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`;
  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': APPLICATION,
    },
  })
    .then((response) => response.json())
    .then((data) => data)

    .catch((err) => err);

  return responses;
};

export { getAllIndicators, getAllSimulators };
