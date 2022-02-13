import React, { useContext } from 'react';
import Context from '../../../../Provider/Context';

const ResultsPanel = () => {
  const { simulateResults } = useContext(Context);

  const renderResults = () => {
    return (
      simulateResults.map((e) => console.log(e, 'sapin'))
    );
  };

  return (
    <div style={{ width: 'calc(100% - 55px)', marginLeft: '55px', height: 'calc(100% - 37px )' }}>
      <h2>Resultado da Simulação</h2>
      {renderResults()}
    </div>
  );
};

export default ResultsPanel;
