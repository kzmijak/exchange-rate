import { Table } from "@mui/joy";
import { FC } from "react";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TransactionModel } from "models/Transaction/src/TransactionModel";
import { arrayMapTransactionModelToConversionTableRow } from "./utils/transactionToRowMapper";
import { TableFooter } from "./components/TableFooter";

type ConversionTableProps = {
  transactions: TransactionModel[];
};

export const ConversionTable: FC<ConversionTableProps> = ({ transactions }) => {
  const rows = arrayMapTransactionModelToConversionTableRow(transactions);

  return (
    <Table
      aria-label="albums table"
      borderAxis="none"
      color="neutral"
      size="md"
      stickyHeader
      stripe="odd"
      variant="plain"
      hoverRow
    >
      <TableHeader />
      <TableBody rows={rows} />
      <TableFooter rows={rows} />
    </Table>
  );
};
