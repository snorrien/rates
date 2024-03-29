import React from "react";
import { useTranslation } from "react-i18next";
import "./OfficialRates.css";

export interface Props {
    date: string,
    euro: number,
    dollar: number
}

const OfficialRates: React.FC<Props> = (props) => {
    const { t } = useTranslation();

    return (
        <div className="alert alert-primary" role="alert">
            <div className="data__official_rates">
                <div className="title__official-rates">
                    <h2>{t("Official Rates")}</h2>
                    <h3>{props.date}</h3>
                </div>
                <div className="borderOf">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">{t("currency")}</th>
                                <th scope="col">{t("exchange")}</th>
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
            </div>
        </div>
    )
};


export default OfficialRates;