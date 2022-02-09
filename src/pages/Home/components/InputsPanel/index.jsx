/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import NumberFormat from 'react-number-format';
// import { IMaskInput } from 'react-imask';

import * as S from './index.styles';

const NumberFormatCustom = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
});

const InputsPanel = () => {
  const [form, setForm] = useState([]);
  const simulateData = [
    {
      title: 'Rendimento',
      info: 'sapo',
      inputText: ['Bruto', 'Líquido'],
      fieldText: ['Aporte Inicial', 'Prazo (com cinco meses)', 'IPCA(ao ano)'],
    },
    {
      title: 'Tipos de indexação',
      info: 'queijin',
      inputText: ['PRÉ', 'PÓS', 'FIXADO'],
      fieldText: ['Aporte mensal', 'Rentabilidade', 'CDI(ao ano)'],
    },
  ];

  // const formButtons = ['']

  const handleChange = ({ target: { value, name } }) => {
    return setForm({
      ...form, [name]: value,
    });
  };

  const CustomTextField = styled(TextField)({
    width: '100%',
  });

  const checkValue = (e) => {
    // if (form[e]) {
    console.log('entrei', form[e]);
    return (
      <TextField
        id="input-with-icon-textfield"
        name={e}
        variant="standard"
        sx={{ width: '100%' }}
        onChange={handleChange}
        value={form[e]}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          inputComponent: NumberFormatCustom,
        }}
      />
    );
    // }
    // return (
    //   <TextField
    //     id="input-with-icon-textfield"
    //     name={e}
    //     variant="standard"
    //     sx={{ width: '100%' }}
    //     value={form[e]}
    //     onChange={handleChange}
    //   />
    // );
  };

  const renderForms = () => {
    return simulateData.map((el, i) => {
      return (
        <S.Columns key={i}>
          <p>
            {el.title}
          </p>
          <S.ButtonsSection>
            <div>
              {el.inputText.map((e, index) => {
                return (
                  <button type="button" key={index}>{e}</button>
                );
              })}
            </div>
          </S.ButtonsSection>
          {el.fieldText.map((e, index) => {
            return (
              <S.Label htmlFor={index} key={index} display={form[e] ? 'flex' : 'none'}>
                {e}
                {checkValue(e)}
              </S.Label>
            );
          })}
        </S.Columns>
      );
    });
  };
  const SimulateButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#ffa500',
    },
    width: '45%',
    color: 'black',
    borderWidth: 'thin',
    borderColor: 'black',
    boxShadow: 'none',
    borderStyle: 'solid',
    background: 'none',
  });

  const CleanFieldsButtons = styled(Button)({
    '&:hover': {
      backgroundColor: 'red',
    },
    width: '45%',
    color: 'black',
    borderWidth: 'thin',
    borderColor: 'black',
    boxShadow: 'none',
    borderStyle: 'solid',
    background: 'none',
  });

  return (
    <div>
      <h2>Simulador</h2>
      <S.ContentDiv>
        {renderForms()}
      </S.ContentDiv>
      <S.ContentDiv>
        <CleanFieldsButtons
          variant="contained"
          size="large"
        >
          <strong>Limpar campos</strong>

        </CleanFieldsButtons>
        <SimulateButton
          size="large"
          variant="contained"

        >
          <strong>Simular</strong>
        </SimulateButton>

      </S.ContentDiv>
    </div>
  );
};

export default InputsPanel;
