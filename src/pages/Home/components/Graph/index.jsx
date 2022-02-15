/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React, { useContext } from 'react';

import { ResponsiveBar } from '@nivo/bar';
import Context from '../../../../Provider/Context';

const Graph = ({ newdata, keys }) => {
  const { graphResults } = useContext(Context);

  console.log('keys', keys);
  console.log('data', newdata);

  const renderGraph = () => (
    <ResponsiveBar
      data={newdata}
      keys={keys}
      indexBy="value"
      margin={{
        top: 0, right: 0, bottom: 70, left: 0,
      }}
      enableGridY={false}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={(el) => el.data[`${el.id}Color`]}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.6,
          ],
        ],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Tempo(meses)',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.6,
          ],
        ],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'row',
          justify: false,
          translateX: -360,
          translateY: 64,
          itemsSpacing: 35,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      innerPadding={2}
      role="application"
      enableLabel={false}
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function(e) { return `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`; }}
    />
  );
  return (
    graphResults.length > 0 && renderGraph()
  );
};

export default Graph;
