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
    const keys = allKeys.filter((e) => rightKeys.includes(e));
    console.log(keys, 'keys', keys.reverse());
    return keys;
  };

  return (
    <S.Wrapper>
      <S.MainDiv>
        <S.Title>Simulador de Investimentos</S.Title>
        <S.ContentDiv>
          <InputsPanel />
          <S.ResultsWrapper>
            <ResultsPanel />
            <S.GraphSection>
              {graphResults.length > 0 && (
                <Graph
                  newdata={graphResults}
                  keys={renderKeys()}
                />
              )}
            </S.GraphSection>
          </S.ResultsWrapper>
        </S.ContentDiv>
      </S.MainDiv>
    </S.Wrapper>
  );
};

export default Home;
