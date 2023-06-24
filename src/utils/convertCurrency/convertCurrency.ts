export const convertEurToPln = (amountEur: number, eurToPlnRate: number) =>
  cutDecimals(amountEur * eurToPlnRate);
export const convertPlnToEur = (amountPLN: number, eurToPlnRate: number) =>
  cutDecimals(amountPLN / eurToPlnRate);

const cutDecimals = (overflowing: number) => parseFloat(overflowing.toFixed(2));
