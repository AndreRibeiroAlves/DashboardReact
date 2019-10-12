import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

  
export default class StackedBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
  
    render() {
        const data = [
            {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
        ];
        return (
            <BarChart
            width={362}
            height={200}
            data={data}
            margin={{
                top: 20, right: 10, left: 10, bottom: 2,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <br/>
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
        );
    }
  }
   