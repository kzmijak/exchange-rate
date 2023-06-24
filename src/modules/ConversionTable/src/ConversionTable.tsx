import { Table } from "@mui/joy";
import { FC, useMemo } from "react";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TransactionModel } from "models/Transaction/src/TransactionModel";
import { arrayMapTransactionModelToConversionTableRow } from "./utils/transactionToRowMapper";
import { TableFooter } from "./components/TableFooter";
import {
  ConversionTableApiContext,
  ConversionTableApiContextType,
} from "./contexts/ConversionTableApiContext";

type ConversionTableProps = {
  transactions: TransactionModel[];
  onTransactionDelete?: (id: TransactionModel["id"]) => void;
};

export const ConversionTable: FC<ConversionTableProps> = ({
  transactions,
  onTransactionDelete = () => null,
}) => {
  const rows = arrayMapTransactionModelToConversionTableRow(transactions);
  const apiContextValue: ConversionTableApiContextType = useMemo(
    () => ({
      deleteRow: onTransactionDelete,
      rows,
    }),
    [transactions]
  );

  return (
    <ConversionTableApiContext.Provider value={apiContextValue}>
      <Table
        aria-label="conversion table"
        borderAxis="none"
        color="neutral"
        size="md"
        stickyHeader
        stripe="odd"
        variant="plain"
        hoverRow
      >
        <TableHeader />
        <TableBody />
        <TableFooter />
      </Table>
    </ConversionTableApiContext.Provider>
  );
};
