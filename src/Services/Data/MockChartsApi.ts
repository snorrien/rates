import { ChartsResult } from "../../Interfaces/ChartsResult";
import HttpGet from "../HttpGet";
import { ChartsApi } from "./ChartsApi";

export class MockChartsApi implements ChartsApi {
  getCharts(): ChartsResult {
    const result: ChartsResult = {
        points: [
            {
                EUR: 117,
                USD: 110,
                date: '01.03'
            },
            {
                EUR: 115,
                USD: 107,
                date: '02.03'
            },
            {
                EUR: 120,
                USD: 113,
                date: '03.03'
            },
            {
                EUR: 119,
                USD: 113,
                date: '04.03'
            },
            {
                EUR: 115,
                USD: 108,
                date: '05.03'
            }
            ,
            {
                EUR: 113,
                USD: 105,
                date: '06.03'
            },
            {
                EUR: 114,
                USD: 105,
                date: '07.03'
            }
        
        ]
      };
    return result;
  }
}