import React from "react";
import classes from "./OfficialRates.module.css";
import Chart from "./Chart";

function OfficialRates(props) {
    return (
        <div className={classes.official_rates}>

            <div className={classes.data__official_rates}>
                <div className="table__official-rates">
                    <div className="title__official-rates">
                        <h2>Official rates</h2>
                        <h3>{props.date}</h3>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Currency</th>
                                <th scope="col">Exchange</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>EUR</th>
                                <td>{props.euro}</td>
                            </tr>
                            <tr>
                                <th>USD</th>
                                <td>{props.dollar}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.chart__official_rates}>
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default OfficialRates;