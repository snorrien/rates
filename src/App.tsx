import React from "react";
import "./style.css"
import './App.css';
import './NavbarHead/NavbarHead';
import NavbarHead from './NavbarHead/NavbarHead';
import OfficialRates from './OfficialRates/OfficialRates';
import { MockRatesApi } from "./Services/Data/MockRatesApi";
import ExchangeRates from "./ExchangeRates/ExchangeRates";
import { MockChartsApi } from "./Services/Data/MockChartsApi";
import Chart from "./OfficialRates/Chart";

function App() {
  const ratesApi = new MockRatesApi();
  const chartsApi = new MockChartsApi();

  const result = ratesApi.getRates();
  const charts = chartsApi.getCharts();

  return (
    <React.Fragment>
      <div className="app">
        <div className="app_navbar">
          <NavbarHead />
        </div>
        
        <div className="chart__official_rates">
          <Chart points={charts?.points} />
        </div>
        <div className="data__official_rates">
          <OfficialRates date={result?.date} euro={result?.averageEuro} dollar={result?.averageDollar} />
        </div>
        
    
        <div className="rate__exchangeRates">
          <ExchangeRates rates={result?.rates} />
        </div>
      </div>
    </React.Fragment>
  )
}
export default App;
