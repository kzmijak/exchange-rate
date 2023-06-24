import { action, makeObservable, observable, runInAction } from "mobx";
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
      fetchHistory: action,
    });
  }

  insert(transaction: Omit<TransactionModel, "id">) {
    const newTransaction = { ...transaction, id: nanoid() };
    this.transactions = [...this.transactions, newTransaction];
  }

  async fetchHistory() {
    this.status = "pending";
    try {
      const transactions = await fetchTransactions();
      runInAction(() => {
        this.transactions = transactions;
        this.status = "fulfilled";
      });
    } catch {
      runInAction(() => {
        this.status = "rejected";
      });
    }
  }
}

export const transactionsStore = new TransactionsStore();
