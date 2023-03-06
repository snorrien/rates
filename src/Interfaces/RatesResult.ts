import { Rate } from "./Rate";


export class RatesResult {
    rates: Rate[] = [];
    date!: string;
    averageEuro!: number;
    averageDollar!: number;
}