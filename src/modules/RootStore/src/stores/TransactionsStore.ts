import { action, flow, makeObservable, observable } from "mobx";
import { TransactionModel } from "models/Transaction/src/TransactionModel";
import { nanoid } from "nanoid";
import { fetchTransactions } from "../../../../api/fetchTransactions";

export class TransactionsStore {
  transactions: TransactionModel[] = [];
  status: "idle" | "pending" | "fulfilled" | "rejected" = "idle";

  constructor() {
    makeObservable(this, {
      transactions: observable,
      status: observable,
      insert: action.bound,
      fetchHistory: flow.bound,
      deleteById: action.bound,
    });
  }

  insert(transaction: Omit<TransactionModel, "id">) {
    const newTransaction = { ...transaction, id: nanoid() };
    this.transactions = [...this.transactions, newTransaction];
  }

  deleteById(id: TransactionModel["id"]) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }

  *fetchHistory() {
    this.status = "pending";
    try {
      const transactions: TransactionModel[] = yield fetchTransactions();
      this.transactions = transactions;
      this.status = "fulfilled";
    } catch {
      this.status = "rejected";
    }
  }
}

export const transactionsStore = new TransactionsStore();
