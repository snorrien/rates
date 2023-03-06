import { RatesResult } from "../../Interfaces/RatesResult";
import HttpGet from "../HttpGet";


function GetRates() : RatesResult {
  return HttpGet('rates');
}

export default GetRates;