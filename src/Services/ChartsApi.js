import HttpGet from "./HttpGet";

function GetCharts() {
  return HttpGet('charts');
}

export default GetCharts;