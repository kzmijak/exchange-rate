import { cutDecimals } from "./utils/cutDecimals";

export const convertPlnToEur = (amountPLN: number, eurToPlnRate: number) =>
  cutDecimals(amountPLN / eurToPlnRate);
