import { ChartsResult } from "../../Interfaces/ChartsResult";
import HttpGet from "../HttpGet";
import { ChartsApi } from "./ChartsApi";

export class HttpChartsApi implements ChartsApi {
  getCharts(): ChartsResult {
    return HttpGet('charts');
  }
}