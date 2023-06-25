import { ConversionTableColumn } from "../models/ConversionTableColumn";

type ColumnProperties = {
  displayValue: string;
  columnWidth: number;
  contentAlign: "left" | "right" | "center";
};

export const columnsConfig: Record<ConversionTableColumn, ColumnProperties> = {
  Title: {
    displayValue: "Title",
    columnWidth: 30,
    contentAlign: "left",
  },
  AmountPLN: {
    displayValue: "Amount (PLN)",
    columnWidth: 20,
    contentAlign: "right",
  },
  AmountEUR: {
    displayValue: "Amount (EUR)",
    columnWidth: 20,
    contentAlign: "right",
  },
  Options: {
    displayValue: "Options",
    columnWidth: 20,
    contentAlign: "center",
  },
};
