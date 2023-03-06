import { RatesResult } from "../../Interfaces/RatesResult";


interface DataProvider {
    getRates(): RatesResult;
}