import React, { useEffect, useState } from 'react';
import Context from './Context';
import { getAllIndicators, getAllSimulators } from '../services/api';

const defaultForm = {
  'Aporte mensal': { value: '', type: 'currency' },
  'Aporte Inicial': { value: '', type: 'currency' },
  Rentabilidade: { value: '', type: 'percentage' },
  'Prazo (com cinco meses)': { value: '', type: 'percentage' },
  'CDI(ao ano)': { value: 0, type: 'disabled' },
  'IPCA(ao ano)': { value: 0, type: 'disabled' },
};

const defaultCurrentOptions = {
  Rendimento: { value: 'Bruto' },
  'Tipos de indexação': { value: 'PÓS' },
};

const resultSimulate = {
  valorFinalBruto: { value: 'Valor Final Bruto', color: 'black' },
  aliquotaIR: { value: 'Alíquota do IR', color: 'black' },
  valorPagoIR: { value: 'Valor Pago em IR', color: 'black' },
  valorTotalInvestido: { value: 'Valor Total Investido', color: 'black' },
  valorFinalLiquido: { value: 'Valor Final Líquido', color: 'green' },
  ganhoLiquido: { value: 'Ganho Líquido', color: 'green' },
};

const Provider = ({ children }) => {
  const [form, setForm] = useState(defaultForm);
  const [currentOptions, setCurrentOptions] = useState(defaultCurrentOptions);
  const [isValid, setIsValid] = useState(false);
  const [simulateResults, setSimulateResults] = useState({});
  const [graphResults, setGraphResults] = useState([]);

  useEffect(() => {
    // this useEffect will be listening to form values to check if they're not empty
    // and if all values not empty it will update isValid state to true
    const keys = Object.keys(form);
    const check = keys.every((e) => form[e].value);
    if (check === true) {
      return setIsValid(true);
    }
    return setIsValid(false);
  }, [form]);

  const handleChange = (e, name) => {
    if (form[name].type === 'currency') {
      return setForm((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          value: e.target.value,
        },
      }));
    }
    return setForm((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: e.floatValue,
      },
    }));
  };

  const clearState = () => {
    setForm(defaultForm);
  };

  const fetchIndicators = async() => {
    const data = await getAllIndicators();
    data.forEach((e) => {
      // on this line i will create a first loop inside mine indicators arr
      return Object.keys(form).forEach((el) => {
        // cause my state doesn't have the same keyname that api has i need a second loop to check
        if (el.toLowerCase().includes(e.nome)) {
          // when my key includes api indicator name we update state value
          defaultForm[el].value = e.valor;
          setForm((prevState) => ({
            ...prevState,
            [el]: {
              ...prevState[el],
              value: e.valor,
            },
          }));
        }
      });
    });
  };

  const handleClick = ({ target: { value, name } }) => {
    return setCurrentOptions((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  const treatsStringtoApi = (string) => {
    const word = string.toLowerCase().replace('ó', 'o').replace('é', 'e').replace('í', 'i');
    return word;
  };
  const handleGraphState = (data, e) => {
    const graphData = [];
    const graphKeys = Object.keys(data[0].graficoValores).reverse();
    const optionsKeys = Object.keys(data[0].graficoValores.comAporte);
    graphKeys.forEach((el) => {
      optionsKeys.forEach((option, i) => {
        const index = graphData.findIndex((element) => element.value === option);
        console.log(i, graphData, 'sapin');
        if (index >= 0) {
          // eslint-disable-next-line no-return-assign
          graphData[index][`${el}Color`] = '#e59400';
          // eslint-disable-next-line no-return-assign
          return graphData[index][el] = data[0][e][el][option];
        }

        return graphData.push({ value: option, [el]: data[0][e][el][option], [`${el}Color`]: 'black' });
      });
    });
    console.log('graph', graphKeys);
    return setGraphResults(graphData);
  };

  const simulateClick = async() => {
    const indexacao = treatsStringtoApi(currentOptions['Tipos de indexação'].value);
    const rendimento = treatsStringtoApi(currentOptions.Rendimento.value);
    const data = await getAllSimulators(indexacao, rendimento);
    const keys = Object.keys(data[0]);

    keys.splice(0, 2);

    keys.forEach((e) => {
      if (e !== 'graficoValores') {
        return setSimulateResults((prevState) => ({
          ...prevState,
          [resultSimulate[e].value]: {
            value: data[0][e], color: resultSimulate[e].color,
          },
        }));
      }
      return handleGraphState(data, e);
    });
  };

  useEffect(() => {
    fetchIndicators();
  }, []);

  const context = {
    form,
    setForm,
    handleChange,
    clearState,
    currentOptions,
    setCurrentOptions,
    isValid,
    handleClick,
    simulateClick,
    simulateResults,
    graphResults,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
