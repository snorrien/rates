import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./OfficialRates.module.css";




function OfficialRates(props) {
    const { t } = useTranslation();

    const UpRate = () => {
        const arrUsd = [props.arryUp]
        var lastItemUsd = arrUsd.find(item => item.EUR === arrUsd[arrUsd.length - 1]);
        var preLastItemUsd = arrUsd.find(item => item.EUR === arrUsd[arrUsd.length - 2]);
        const diffUsd = +lastItemUsd - +preLastItemUsd;

        if (diffUsd > 0) {
            return (
                <div className="one">
                    {diffUsd}
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill="green"><path d="M18.079,6L12.996,.445c-.532-.593-1.461-.593-1.993,0L5.921,6h5.079V24h2V6h5.079Z" /></svg>
                </div>)
        }
        return (
            <div className="two">
                {diffUsd}
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" fill="red" ><path d="M13,18V0h-2V18H5.921l5.083,5.555c.532,.593,1.461,.593,1.993,0l5.083-5.555h-5.079Z" /></svg>;
            </div>)
    }



return (
    <div className={classes.official_rates}>
        <div className={classes.data__official_rates}>
            <div className="table__official-rates">
                <div className="title__official-rates">
                    <h2>{t("Official Rates")}</h2>
                    <h3>{props.date}</h3>
                    


                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">{t("currency")}</th>
                            <th scope="col">{t("exchange")}</th>
                            <th scope="col">{t("changing")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>EUR</th>
                            <td>{props.euro}</td>
                            <td></td>
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