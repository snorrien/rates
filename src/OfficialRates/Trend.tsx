import React from "react";
import { Point } from "../Interfaces/Point";

export interface Props {
    points: Point[];
}

const Trend: React.FC<Props> = (props) => {
    const points = props.points;
    if (!points || points.length < 2) {
        return null;
    }
        
    const lastValue = points[points.length - 1].USD;
    const preLastValue = points[points.length - 2].USD;

    const diffUsd = lastValue - preLastValue;

    if (diffUsd > 0) {
        return (
            <div className="one">
                {diffUsd}
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill="green"><path d="M18.079,6L12.996,.445c-.532-.593-1.461-.593-1.993,0L5.921,6h5.079V24h2V6h5.079Z" /></svg>
            </div>)
    } else {
        return (
            <div className="two">
                {diffUsd}
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" fill="red" ><path d="M13,18V0h-2V18H5.921l5.083,5.555c.532,.593,1.461,.593,1.993,0l5.083-5.555h-5.079Z" /></svg>;
            </div>)
    }
}

export default Trend;