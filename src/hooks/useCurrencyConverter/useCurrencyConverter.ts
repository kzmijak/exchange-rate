import { useRootStore } from "modules/RootStore";
import { convertEurToPln, convertPlnToEur } from "utils/convertCurrency";

export const useCurrencyConverter = () => {
  const {
    conversionRateStore: { eurToPln },
  } = useRootStore();

  return {
    convertEurToPln: (amountEUR: number) =>
      convertEurToPln(amountEUR, eurToPln),
    convertPlnToEur: (amountPLN: number) =>
      convertPlnToEur(amountPLN, eurToPln),
  };
};
