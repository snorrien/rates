import { RatesResult } from "../../Interfaces/RatesResult";
import HttpGet from "../HttpGet";
import { RateApi } from "./RateApi"; 

export class HttpRatesApi implements RateApi {
  getRates(): RatesResult {
    return HttpGet('rates');
  }
}

