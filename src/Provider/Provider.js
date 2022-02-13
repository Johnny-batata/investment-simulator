import React, { useEffect, useState } from 'react';
import Context from './Context';
import { getAllIndicators } from '../services/api';

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

const Provider = ({ children }) => {
  const [form, setForm] = useState(defaultForm);
  const [currentOptions, setCurrentOptions] = useState(defaultCurrentOptions);
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    // this useEffect will be listening to form values to check if they're not empty
    // and if all values not empty it will update is disable state to true
    const keys = Object.keys(form);
    const check = keys.every((e) => {
      return form[e].value;
    });
    if (check === true) {
      return setIsDisable(false);
    }
    return setIsDisable(true);
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
    isDisable,
    handleClick,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
