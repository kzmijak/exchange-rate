import { preventDecimalOverflow } from "utils/preventDecimalOverflow";

export const convertEurToPln = (amountEur: number, eurToPlnRate: number) =>
  preventDecimalOverflow(amountEur * eurToPlnRate);
