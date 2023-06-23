import { TransactionModel } from "models/TransactionModel";

export type ConversionTableRow = {
  id: TransactionModel["id"];
  title: TransactionModel["title"];
  amountPLN: TransactionModel["amount"];
};
