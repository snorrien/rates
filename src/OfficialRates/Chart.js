import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

import classes from "./Chart.module.css";

function Chart(props) {
    return (
        <div >
            <LineChart width={600} height={300} data={props.charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line dataKey="EUR" type="monotone" stroke="#8884d8" />
                <Line dataKey="USD" type="monotone" stroke="#82ca9d" />

                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </div>
    )
}



export default Chart;

