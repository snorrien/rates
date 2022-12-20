import { ChartsResult } from "../Interfaces/ChartsResult";
import HttpGet from "./HttpGet";


function GetCharts() : ChartsResult | unknown{
  return HttpGet('charts');
}

export default GetCharts;