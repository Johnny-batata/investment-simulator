import React, { useContext } from 'react';
import Context from '../../../../Provider/Context';

import * as S from './index.styles';

const ResultsPanel = () => {
  const { simulateResults } = useContext(Context);
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
      <S.ResultCardSections>
        {keys.map((e) => {
          console.log(e, 'elemento');

          return (
            <S.ResultCard>
              <strong>{e}</strong>
              {typeCheck(e)}
            </S.ResultCard>
          );
        })}
      </S.ResultCardSections>

    );
  };

  return (
    <div style={{ height: 'calc(100% - 37px )', width: '-webkit-fill-available' }}>
      <S.Wrapper>
        <S.Title>Resultado da Simulação</S.Title>
        {simulateResults && renderResults()}
      </S.Wrapper>
    </div>
  );
};

export default ResultsPanel;
