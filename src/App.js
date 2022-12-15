import React from "react";

import classes from './App.module.css';
import './NavbarHead/NavbarHead';
import NavbarHead from './NavbarHead/NavbarHead';
import OfficialRates from './OfficialRates/OfficialRates';
import GetRates from "./Services/RatesApi";
import ExchangeRates from "./ExchangeRates/ExchangeRates";
import GetCharts from "./Services/ChartsApi";
import Chart from "./OfficialRates/Chart";
import ErrorBoundary from "./Services/ErrorBoundary";



function App() {
  const result = GetRates();
  const charts = GetCharts();

  return (
    <React.Fragment>
    <div className={classes.app__page}>
      <div className='app__navigation'>
        <NavbarHead />
      </div>
     
      <div className={classes.app__data}>
      <ErrorBoundary>
        <div className={classes.app__data_chart}>
        <div className='app__official-rates'>
          <OfficialRates date={result.date} euro={result.averageEuro} dollar={result.averageDollar} arryUp={charts.points}/>
        </div>
          <div className={classes.chart__official_rates}>
            <Chart charts={charts.points} />
          </div>
        </div>
        </ErrorBoundary>
        <div className={classes.data__official_rates}>
          <ExchangeRates rates={result.rates} />
        </div>

      </div>
      <div className={classes.app__end}>
        <h5>Copywrite © 2022 </h5>

      </div>
    </div>
    </React.Fragment>

  )
}
export default App;
