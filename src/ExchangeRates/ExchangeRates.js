import React from "react";
import Round from "../Services/Round";
import { useTranslation } from "react-i18next";

function ExchangeRates(props) {
    const { t } = useTranslation();

    return (
        <div className="table-rates">
            <div className="table-title">
                <h1>{t("Rates")}</h1>
            </div>

            <table class="table table-hover">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">{t("exchange office")}</th>
                        <th scope="col">EUR</th>
                        <th scope="col">{t("buy")}</th>
                        <th scope="col">{t("sell")}</th>
                        <th scope="col">USD</th>
                        <th scope="col">{t("buy")}</th>
                        <th scope="col">{t("sell")}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rates?.map((rate) =>
                            <tr>
                                <th scope="col">{rate.companyName}</th>
                                <th scope="col">EUR</th>
                                <td scope="col">{Round(rate.euro.buy)}</td>
                                <td scope="col">{Round(rate.euro.sell)}</td>
                                <th scope="col">USD</th>
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