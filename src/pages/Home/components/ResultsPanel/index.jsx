import React, { useContext } from 'react';
import Context from '../../../../Provider/Context';

import * as S from './index.styles';

const ResultsPanel = () => {
  const { simulateResults, graphResults } = useContext(Context);
  const typeCheck = (e) => {
    const check = e === 'Alíquota do IR';
    if (check) {
      return (
        <p>
          {`${simulateResults[e]}%`}
        </p>
      );
    }
    return (
      <p>{simulateResults[e].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>

    );
  };

  const renderResults = () => {
    const keys = Object.keys(simulateResults);
    return (
      <div style={{ width: '100%' }}>
        <S.Title>Resultado da Simulação</S.Title>
        <S.ResultCardSections>
          {keys.map((e) => {
            return (
              <S.ResultCard>
                <strong>{e}</strong>
                {typeCheck(e)}
              </S.ResultCard>
            );
          })}
        </S.ResultCardSections>
      </div>

    );
  };

  return (
    graphResults.length > 0 && renderResults()
  );
};

export default ResultsPanel;
