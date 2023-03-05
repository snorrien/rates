import React from "react";
import Round from "../Services/Round";
import { useTranslation } from "react-i18next";
import { Rate } from "../Interfaces/Rate";

export interface Props {
    rates: Rate[];
}

const ExchangeRates: React.FC<Props> = (props) => {
    const { t } = useTranslation();

    return (
        <div className="alert alert-primary" role="alert">
            <div className="table-rates">
                <div className="table-title">
                    <h1>{t("Rates")}</h1>
                </div>

                <table className="table table-hover table-bordered table-responsive">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col" rowSpan={2}>{t("exchange office")}</th>
                            <th colSpan={2} scope="col">EUR</th>
                            <th colSpan={2} scope="col">USD</th>

                        </tr>
                        <tr>

                            <th scope="col">{t("buy")}</th>
                            <th scope="col">{t("sell")}</th>
                            <th scope="col">{t("buy")}</th>
                            <th scope="col">{t("sell")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.rates?.map((rate) =>
                                <tr>
                                    <th scope="col">{rate.companyName}</th>
                                    <td scope="col">{Round(rate.euro.buy)}</td>
                                    <td scope="col">{Round(rate.euro.sell)}</td>
                                    <td scope="col">{Round(rate.dollar.buy)}</td>
                                    <td scope="col">{Round(rate.dollar.sell)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ExchangeRates;