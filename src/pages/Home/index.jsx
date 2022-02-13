import React from 'react';
import InputsPanel from './components/InputsPanel/index';
import ResultsPanel from './components/ResultsPanel';
import * as S from './index.styles';

const Home = () => {
  return (
    <S.Wrapper>
      <S.MainDiv>
        <S.Title>Simulador de Investimentos</S.Title>
        <S.ContentDiv>
          <InputsPanel />
          <ResultsPanel />
        </S.ContentDiv>
      </S.MainDiv>
    </S.Wrapper>
  );
};

export default Home;
