import React from 'react';
import { AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import { scaleLinear, scaleTime } from '@vx/scale';
import { Line, LinePath } from '@vx/shape';
import { extent } from 'd3-array';
import { timeFormat, timeParse } from 'd3-time-format';

import './WeatherGraph.css';

// Define the graph dimensions and margins
const width = 600;
const height = 300;
const margin = { top: 20, bottom: 100, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');
const format = timeFormat('%d/%m %H:%M');
const formatDate = date => format(parseDate(date));

// We'll make some helpers to get at the data we want
const x = d => d.date;
const y = d => + d.temp;

const WeatherGraph = (props) => {
	const data = props.weathersData.map((weather) => {
		return { date: parseDate(weather.dt_txt), temp: weather.main.temp_max }
  })

  // And then scale the graph by our data
	const xScale = scaleTime({
		range: [0, xMax],
		domain: extent(data, x)
  });
	const yScale = scaleLinear({
		rangeRound: [yMax, 0],
    domain: extent(data, y)
	});

  // Finally we'll embed it all in an SVG
  return (
    <svg class="graph" width={width} height={height}>
      {/* <rect x={0} y={0} width={width} height={height} fill="#444444" rx={10} /> */}
      <AxisBottom
          top={height - margin.bottom}
          left={0}
          scale={xScale}
          numTicks={5}
          label="Time"
          tickFormat={format}
        >
          {axis => {
            const tickLabelSize = 10;
            const tickRotate = 45;
            const tickColor = '#8e205f';
            const axisCenter = (axis.axisToPoint.x - axis.axisFromPoint.x) / 2;
            return (
              <g className="my-custom-bottom-axis">
                {axis.ticks.map((tick, i) => {
                  const tickX = tick.to.x;
                  const tickY = tick.to.y + tickLabelSize + axis.tickLength;
                  return (
                    <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                      <Line from={tick.from} to={tick.to} stroke={tickColor} />
                      <text
                        transform={`translate(${tickX}, ${tickY}) rotate(${tickRotate})`}
                        fontSize={tickLabelSize}
                        textAnchor="middle"
                        fill={tickColor}
                      >
                        {tick.formattedValue}
                      </text>
                    </Group>
                  );
                })}
                <text textAnchor="middle" transform={`translate(${axisCenter}, 50)`} fontSize="8">
                  {axis.label}
                </text>
              </g>
            );
          }}
        </AxisBottom>
      <LinePath
        data={data}
        x={data => xScale(x(data))}
        y={data => yScale(y(data))}
        stroke={'#000000'}
        strokeWidth={4}
      />
    </svg>
  );
}

export default WeatherGraph
