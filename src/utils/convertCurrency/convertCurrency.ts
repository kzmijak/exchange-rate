export const EUR_TO_PLN = 4.382;

export const convertEurToPln = (amountEur: number) =>
  cutDecimals(amountEur * EUR_TO_PLN);
export const convertPlnToEur = (amountPLN: number) =>
  cutDecimals(amountPLN / EUR_TO_PLN);

const cutDecimals = (overflowing: number) => parseFloat(overflowing.toFixed(2));
