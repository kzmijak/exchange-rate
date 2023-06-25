import { preventDecimalOverflow } from "utils/preventDecimalOverflow";

export const convertPlnToEur = (amountPLN: number, eurToPlnRate: number) =>
  preventDecimalOverflow(amountPLN / eurToPlnRate);
