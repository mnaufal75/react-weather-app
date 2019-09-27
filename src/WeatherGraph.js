import React from 'react';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { scaleLinear, scaleTime } from '@vx/scale';
import { Line, LinePath } from '@vx/shape';
import { extent } from 'd3-array';
import { timeFormat, timeParse } from 'd3-time-format';

import './WeatherGraph.css';

// Define the graph dimensions and margins
const width = 600;
const height = 300;
const margin = { top: 30, bottom: 30, left: 30, right: 30 };

// Then we'll create some bounds
const xMax = width - margin.left;
const yMax = height - margin.top;

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');
const format = timeFormat('%a %H:%M');
// const formatDate = date => format(parseDate(date));

// We'll make some helpers to get at the data we want
const x = d => d.date;
const y = d => + d.temp;

const WeatherGraph = (props) => {
	const data = props.weathersData.map((weather) => {
		return { date: parseDate(weather.dt_txt), temp: weather.main.temp_max }
  })

  // And then scale the graph by our data
	const xScale = scaleTime({
		range: [margin.left + margin.right, xMax],
		domain: extent(data, x)
  });
	const yScale = scaleLinear({
		rangeRound: [yMax, margin.top],
    domain: extent(data, y)
	});

  // Finally we'll embed it all in an SVG
  return (
    <svg class="graph" width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill="#eee" rx={10} />
      <AxisLeft
        left={margin.left + margin.right}
        scale={yScale}
        label="Temp"
        stroke={'#000000'}
        numTicks={5}
      >
      </AxisLeft>
      <AxisBottom
          top={height - margin.bottom}
          left={0}
          scale={xScale}
          label="Time"
          tickFormat={format}
        >
          {props => {
            const tickLabelSize = 10;
            const tickColor = '#000000';
            const axisP = (props.axisToPoint.x - props.axisFromPoint.x) / 7;

            return (
              <g className="my-custom-bottom-axis">
                <Line
                  from={{ x: props.axisFromPoint.x, y: margin.down }}
                  to={{ x: props.axisToPoint.x, y: margin.down }}
                  stroke={tickColor}
                 />
                {data
                  .map((d, i) => {
                    console.log(d.date)
                    return (
                      <>
                        <Line
                          from={{ x: props.axisFromPoint.x + i * axisP, y: 0 }}
                          to={{ x: props.axisFromPoint.x + i * axisP, y: 8 }}
                          stroke={tickColor}
                        />
                        <text
                          transform={`translate(${props.axisFromPoint.x + i * axisP}, 18)`}
                          fontSize={tickLabelSize}
                          textAnchor="middle"
                          fill={tickColor}
                        >
                          {format(d.date)}
                        </text>
                      </>
                  )})
                }
              </g>
            );
          }}
        </AxisBottom>
      <LinePath
        data={data}
        x={data => xScale(x(data))}
        y={data => yScale(y(data))}
        stroke={'#555'}
        strokeWidth={2}
      />
    </svg>
  );
}

export default WeatherGraph
