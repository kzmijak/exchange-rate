import { TransactionModel } from "models/Transaction/src/TransactionModel";
import { ConversionTableRow } from "../models/ConversionTableRow";

export const mapTransactionModelToConversionTableRow = ({
  amount,
  id,
  title,
}: TransactionModel): ConversionTableRow => ({
  id,
  title,
  amountPLN: amount,
});

export const arrayMapTransactionModelToConversionTableRow = (
  array: TransactionModel[]
) => array.map(mapTransactionModelToConversionTableRow);
