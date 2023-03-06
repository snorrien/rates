import { RatesResult } from "../../Interfaces/RatesResult";


export interface RateApi {
    getRates(): RatesResult;
}