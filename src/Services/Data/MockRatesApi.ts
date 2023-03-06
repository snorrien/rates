import { RateApi } from "./RateApi";
import HttpGet from "../HttpGet";
import { RatesResult } from "../../Interfaces/RatesResult";
import { Rate } from "../../Interfaces/Rate";
import { Values } from "../../Interfaces/Values";

export class MockRatesApi implements RateApi {
    getRates(): RatesResult {
        return <RatesResult>{
            date: "07.03.2023",
            averageEuro: 116.5,
            averageDollar: 109.8,
            rates: <Rate[]>[
                <Rate>{
                    companyName: "Gaga",
                    euro: <Values>{
                        buy: "116.9",
                        sell: "117.5"
                    },
                    dollar: <Values>{
                        buy: "108",
                        sell: "111.2"
                    }
                },
                <Rate>{
                    companyName: "Eldorado",
                    euro: <Values>{
                        buy: "116",
                        sell: "118"
                    },
                    dollar: <Values>{
                        buy: "108.5",
                        sell: "112"
                    }
                },
                <Rate>{
                    companyName: "Konverta",
                    euro: <Values>{
                        buy: "115",
                        sell: "117"
                    },
                    dollar: <Values>{
                        buy: "106",
                        sell: "110.4"
                    }
                },
                <Rate>{
                    companyName: "Genes",
                    euro: <Values>{
                        buy: "115.4",
                        sell: "118"
                    },
                    dollar: <Values>{
                        buy: "106",
                        sell: "111.9"
                    }
                },
            ]
        }
    }
}