import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Chart() {
    const dataOne = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    const dataTwo = [{ name: 'Page B', uv: 500, pv: 2500, amt: 2500 }];
    return (
        <div>
            <LineChart width={600} height={300} data={dataOne} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart;

