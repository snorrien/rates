import React from "react";
import Round from "../Services/Round";

function ExchangeRates(props) {
    return (
        <div className="table-rates">
            <div className="table-title">
                <h1> Rates</h1>
            </div>

            <table class="table table-hover">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Exchange office </th>
                        <th scope="col">EUR</th>
                        <th scope="col">Buy</th>
                        <th scope="col">Sell</th>
                        <th scope="col">USD</th>
                        <th scope="col">Buy</th>
                        <th scope="col">Sell</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rates?.map((rate) =>
                            <tr>
                                <th scope="col">{rate.companyName}</th>
                                <td scope="col">EUR</td>
                                <td scope="col">{Round(rate.euro.buy)}</td>
                                <td scope="col">{Round(rate.euro.sell)}</td>
                                <td scope="col">USD</td>
                                <td scope="col">{Round(rate.dollar.buy)}</td>
                                <td scope="col">{Round(rate.dollar.sell)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExchangeRates;