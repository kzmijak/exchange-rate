import { conversionRateStore } from "./stores/ConversionRateStore";

import { transactionsStore } from "./stores/TransactionsStore";

export const createRootStore = () => ({
  conversionRateStore,
  transactionsStore,
});

export type RootStore = ReturnType<typeof createRootStore>;
