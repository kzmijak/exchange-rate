import { useRootStore } from "modules/RootStore";
import { convertEurToPln } from "../utils/convertEurToPln";
import { convertPlnToEur } from "../utils/convertPlnToEur";

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
