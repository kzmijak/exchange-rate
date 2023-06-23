import { FC } from "react";
import { ConversionTableRow } from "../models/ConversionTableRow";
import { Typography } from "@mui/joy";
import { convertPlnToEur } from "utils/convertCurrency";

type TableFooterProps = {
  rows: ConversionTableRow[];
};

export const TableFooter: FC<TableFooterProps> = ({ rows }) => {
  const sumPLN = rows.reduce((acc, curr) => acc + curr.amountPLN, 0);
  const sumEUR = convertPlnToEur(sumPLN);

  return (
    <tfoot>
      <tr>
        <Typography level="h6" textAlign="left">
          Sum: {sumPLN} PLN ( {sumEUR} EUR )
        </Typography>
      </tr>
    </tfoot>
  );
};
