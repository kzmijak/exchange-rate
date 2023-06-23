export const conversionTableColumnConsts = [
  "Title",
  "AmountPLN",
  "AmountEUR",
  "Options",
] as const;

export type ConversionTableColumn =
  (typeof conversionTableColumnConsts)[number];
