import { TransactionModel } from "models/Transaction/src/TransactionModel";

export type ConversionTableRow = {
  id: TransactionModel["id"];
  title: TransactionModel["title"];
  amountPLN: TransactionModel["amount"];
};
