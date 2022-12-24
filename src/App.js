import React, { Suspense } from "react";

import './App.css';
import './NavbarHead/NavbarHead';
import NavbarHead from './NavbarHead/NavbarHead';
import OfficialRates from './OfficialRates/OfficialRates';
import GetRates from "./Services/RatesApi";
import ExchangeRates from "./ExchangeRates/ExchangeRates";
import GetCharts from "./Services/ChartsApi";
import Chart from "./OfficialRates/Chart";
import Loading from "./Services/Loading";
import ErrorBoundary from "./Services/ErrorBoundary";





function App() {
  const result = GetRates();
  const charts = GetCharts();
 

  return (
    <React.Fragment>
      <div className="app">
        <div className="app_navbar">
          <NavbarHead />
        </div>
        <div className="colored">
          <ErrorBoundary>
            <div className="data__official_rates">
              <OfficialRates date={result?.date} euro={result?.averageEuro} dollar={result?.averageDollar} points={charts?.points} />
            </div>
            <div className="chart__official_rates">
              <Chart charts={charts?.points} />
            </div>

          </ErrorBoundary>
          </div>

          <Suspense fallback={<Loading />}>
            <div className="rate__exchangeRates">
              <ExchangeRates rates={result?.rates} />
            </div>
          </Suspense>
        </div>
      
    </React.Fragment>

  )
}
export default App;
