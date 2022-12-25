import React from "react";
import { Point } from "../Interfaces/Point";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./Chart.css";


export interface Props {
    points: Point[];
}

const Chart:  React.FC<Props> = (props) => {
    const max = 150;
    const min = 70;

    return (
        <div className="chart">
            <div className="chart-container">
                <ResponsiveContainer width="90%" height={300}>
                    <LineChart data={props.points} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line dataKey="EUR" type="monotone" stroke="#8884d8" />
                        <Line dataKey="USD" type="monotone" stroke="#82ca9d" />

                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis type="number" domain={[min, max]} allowDataOverflow={true} />
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}



export default Chart;

