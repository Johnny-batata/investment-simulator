/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import NumberFormat from 'react-number-format';
import Input from '@mui/material/Input';
import CheckIcon from '@mui/icons-material/Check';
import simulateData from '../../../../helpers/simulateData/simulateData';
import {
  customTextField, SimulateButton, CleanFieldsButtons, SectionButton, SectionButtonSelected,
} from './muiStyled/muiStyled';
import Context from '../../../../Provider/Context';

import * as S from './index.styles';

const defaultCurrentOptions = {
  Rendimento: { value: 'Bruto' },
  'Tipos de indexação': { value: 'PÓS' },

};

const InputsPanel = () => {
  const { form, handleChange, clearState } = useContext(Context);
  const [currentOptions, setCurrentOptions] = useState(defaultCurrentOptions);

  const renderInputs = (e) => {
    if (form[e].type === 'currency') {
      return (
        <NumberFormat
          customInput={customTextField}
          variant="outlined"
          onChange={(event) => handleChange(event, e)}
          autoComplete="off"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          name={e}
          className="fields"
          value={form[e].value}

        />
      );
    }
    if (form[e].type === 'percentage') {
      return (
        <NumberFormat
          className="fields"
          customInput={customTextField}
          variant="outlined"
          onValueChange={(values) => handleChange(values, e)}
          isAllowed={(values) => {
            const { value } = values;
            return Number(value) >= 0 && Number(value) <= 100;
          }}
          suffix="%"
          decimalScale={form[e].value >= 100 ? 0 : 2}
          decimalSeparator=","
          value={form[e].value}
        />
      );
    }
    return (
      <Input
        id="standard-read-only-input"
        inputprops={{
          readOnly: true,
        }}
        value={`${form[e].value.toString().replace('.', ',')}%`}
        readOnly
        variant="standard"
        sx={{ marginTop: '8px' }}
      />
    );
  };

  const handleClick = ({ target: { value, name } }) => {
    console.log('entrei', value);
    return setCurrentOptions((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };
  const renderForms = () => {
    return simulateData.map((el, i) => {
      return (
        <S.Columns key={i}>
          <p>
            {el.title}
          </p>
          <S.ButtonsSection>
            {el.inputText.map((e, index) => {
              if (currentOptions[el.title].value === e) {
                return (
                  <SectionButtonSelected
                    variant="outlined"
                    startIcon={<CheckIcon sx={{ color: 'white', fontSize: '17px', margin: 0 }} />}
                    name={el.title}
                    value={e}
                    onClick={handleClick}
                    key={index}
                  >
                    {e}

                  </SectionButtonSelected>
                );
              }
              return (
                <SectionButton variant="outlined" name={el.title} value={e} onClick={handleClick} key={index}>{e}</SectionButton>
              );
            })}
          </S.ButtonsSection>
          {el.fieldText.map((e, index) => {
            return (
              <S.Label htmlFor={index} key={index} display={form[e] ? 'flex' : 'none'}>
                {e}
                {renderInputs(e)}
              </S.Label>
            );
          })}
        </S.Columns>
      );
    });
  };

  return (
    <div style={{ height: 'calc(100% - 37px)', width: '35%' }}>
      <h2>Simulador</h2>
      <S.ContentDiv style={{ marginBottom: '10px' }}>
        { renderForms()}
      </S.ContentDiv>
      <S.ContentDiv>
        <CleanFieldsButtons
          variant="contained"
          size="large"
          onClick={clearState}
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
