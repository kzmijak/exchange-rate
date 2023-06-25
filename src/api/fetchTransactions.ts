import axios from "axios";
import {
  TransactionDto,
  arrayMapTransactionDtoToModel,
} from "models/Transaction";

export const fetchTransactions = async () => {
  const response = await axios.get<TransactionDto[]>(
    "https://my.api.mockaroo.com/transactions.json?key=fcdf6950"
  );

  return arrayMapTransactionDtoToModel(response.data);
};
