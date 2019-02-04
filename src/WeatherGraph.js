import React from 'react';
import { letterFrequency } from '@vx/mock-data';
import { Group } from '@vx/group';
import { Bar, LinePath } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { curveMonotoneX } from '@vx/curve';
import { extent, max } from 'd3-array';

// We'll use some mock data from `@vx/mock-data` for this.
// const data = letterFrequency;

// Define the graph dimensions and margins
const width = 400;
const height = 200;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.date;
const y = d => + d.temp;

const WeatherGraph = (props) => {
	const data = props.weathersData.map((weather) => {
		return { date: weather.dt_txt, temp: weather.main.temp_max }
	})

  // And then scale the graph by our data
	const xScale = scaleBand({
		rangeRound: [0, xMax],
		domain: data.map(x),
		// padding: 0.4,
	});
	const yScale = scaleLinear({
		rangeRound: [yMax, 0],
    // domain: [0, Math.max(...data.map(y))],
    domain: extent(data, y)
	});

  // Compose together the scale and accessor functions to get point functions
	const compose = (scale, accessor) => (data) => scale(accessor(data));
	const xPoint = compose(xScale, x);
	const yPoint = compose(yScale, y);

  // Finally we'll embed it all in an SVG
  return (
    <svg width={width} height={height}>
      {/* <rect x={0} y={0} width={width} height={height} fill="#242424" rx={10} /> */}
      return (
        <LinePath
          data={data}
          x={data => xScale(x(data))}
          y={data => yScale(y(data))}
          stroke={'#000000'}
          strokeWidth={4}
          curve={curveMonotoneX}
        />
      )
    </svg>
  );
}

export default WeatherGraph