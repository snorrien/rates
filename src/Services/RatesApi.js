import HttpGet from "./HttpGet";

function GetRates() {
  return HttpGet('rates');
}

export default GetRates;