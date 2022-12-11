import React from "react";
import classes from './App.module.css';
import './NavbarHead/NavbarHead';
import NavbarHead from './NavbarHead/NavbarHead';
import OfficialRates from './OfficialRates/OfficialRates';
import GetRates from "./Services/RatesApi";
import ExchangeRates from "./ExchangeRates/ExchangeRates";
import GetCharts from "./Services/ChartsApi";

function App() {
  const result = GetRates();
  const charts = GetCharts();

  console.log(result);
  return (
    <div className={classes.app__page}>
      <div className='app__navigation'>
        <NavbarHead />
      </div>
      <div className={classes.app__data}>


        <div className='app__official-rates'>
          <OfficialRates charts={charts.points} date={result.date} euro={result.averageEuro} dollar={result.averageDollar} />
        </div>
        <div className={classes.app__rates}>
          <ExchangeRates rates={result.rates}/>
        </div>
      </div>
      <div className={classes.app__end}>
        <h5>Copywrite © 2022 </h5>

      </div>
    </div>
  )
}
export default App;
