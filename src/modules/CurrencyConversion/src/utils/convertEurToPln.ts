import { cutDecimals } from "./utils/cutDecimals";

export const convertEurToPln = (amountEur: number, eurToPlnRate: number) =>
  cutDecimals(amountEur * eurToPlnRate);
