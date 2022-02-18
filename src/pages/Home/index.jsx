import React, { useContext } from 'react';
import InputsPanel from './components/InputsPanel/index';
import ResultsPanel from './components/ResultsPanel';
import * as S from './index.styles';
import Graph from './components/Graph';
import Context from '../../Provider/Context';

const Home = () => {
  const { graphResults } = useContext(Context);
  const renderKeys = () => {
    const allKeys = Object.keys(graphResults[0]);
    const rightKeys = ['comAporte', 'semAporte'];
    return allKeys.filter((e) => rightKeys.includes(e));
  };

  return (
    <S.Wrapper>
      <S.MainDiv>
        <S.Title>Simulador de Investimentos</S.Title>
        <S.ContentDiv>
          <InputsPanel />
          <S.ResultsWrapper>
            <ResultsPanel />
            {/* <section style={{ height: '59%', width: 'calc(100% - 15px)' }}> */}
            {/* <section style={{ height: '59%', width: '1000px' }}> */}
            <section style={{ height: '50%', width: '100%' }}>
              {graphResults.length > 0 && (
                <Graph
                  newdata={graphResults}
                  keys={renderKeys()}
                />
              )}
            </section>
          </S.ResultsWrapper>
        </S.ContentDiv>
      </S.MainDiv>
    </S.Wrapper>
  );
};

export default Home;
