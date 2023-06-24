import {
  conversionRateStore,
  ConversionRateStore,
} from "./stores/ConversionRateStore";
import {
  transactionsStore,
  TransactionsStore,
} from "./stores/TransactionsStore";

export type RootStore = {
  conversionRateStore: ConversionRateStore;
  transactionsStore: TransactionsStore;
};

export const createRootStore = (
  preloadedStore: Partial<RootStore> = {}
): RootStore => ({
  conversionRateStore,
  transactionsStore,
  ...preloadedStore,
});
