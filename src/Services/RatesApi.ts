
import { RatesResult } from "../Interfaces/RatesResult";
import HttpGet from "./HttpGet";


function GetRates() : RatesResult | unknown {
  return HttpGet('rates');
}

export default GetRates;