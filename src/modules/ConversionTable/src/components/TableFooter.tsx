import { FC } from "react";
import { Typography } from "@mui/joy";
import { convertPlnToEur } from "utils/convertCurrency";
import { useConversionTableApi } from "../contexts/ConversionTableApiContext";

export const TableFooter: FC = () => {
  const { rows } = useConversionTableApi();

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
