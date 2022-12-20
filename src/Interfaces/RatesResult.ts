import { Rate } from "./Rate";


export interface RatesResult{
    rates: Rate[],
    date: string,
    averageEuro: number,
    averageDollar: number
}