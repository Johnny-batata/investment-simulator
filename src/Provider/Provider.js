import React, { useEffect, useState, useCallback } from 'react';
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

const Provider = ({ children }) => {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e, name) => {
    // this function change inputs value on state
    if (form[name].type === 'currency') {
      return setForm((prevState) => ({
        ...prevState,
        [name]: {

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

  useEffect(() => {
    fetchIndicators();
  }, []);

  const context = {
    form,
    setForm,
    handleChange,
    clearState,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
