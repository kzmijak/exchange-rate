import { TransactionDto } from "./TransactionDto";

export const mapTransactionDtoToModel = ({
  amount,
  id,
  title,
}: TransactionDto) => ({
  amount,
  id,
  title,
});

export const arrayMapTransactionDtoToModel = (array: TransactionDto[]) =>
  array.map(mapTransactionDtoToModel);
