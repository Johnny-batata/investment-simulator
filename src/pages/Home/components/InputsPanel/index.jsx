/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import NumberFormat from 'react-number-format';
import Input from '@mui/material/Input';
import CheckIcon from '@mui/icons-material/Check';
import simulateData from '../../../../helpers/simulateData/simulateData';
import {
  SimulateButton, CleanFieldsButtons, SectionButton,
} from './muiStyled/muiStyled';
import Context from '../../../../Provider/Context';
import NumberFormatInput from './atoms/NumberFormatInput';

import * as S from './index.styles';

const InputsPanel = () => {
  const {
    form, clearState, currentOptions, isDisable, handleClick,
  } = useContext(Context);

  const renderInputs = (e) => {
    if (form[e].type === 'currency') {
      return (
        <NumberFormatInput e={e} type="currency" />
      );
    }
    if (form[e].type === 'percentage') {
      return (
        <NumberFormatInput e={e} type="percentage" />
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
                  <SectionButton
                    variant="outlined"
                    startIcon={<CheckIcon sx={{ color: 'white', fontSize: '17px', margin: 0 }} />}
                    name={el.title}
                    value={e}
                    onClick={handleClick}
                    key={index}
                    myColor="white"
                    myBackGround="#e59400"
                  >
                    {e}
                  </SectionButton>
                );
              }
              return (
                <SectionButton myColor="black" myBackGround="none" variant="outlined" name={el.title} value={e} onClick={handleClick} key={index}>{e}</SectionButton>
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
          disabled={isDisable}
        >
          <strong>Simular</strong>
        </SimulateButton>
      </S.ContentDiv>
    </div>
  );
};

export default InputsPanel;
