import { FC } from "react";
import { Typography } from "@mui/joy";
import { useConversionTableApi } from "../contexts/ConversionTableApiContext";
import { useCurrencyConverter } from "modules/CurrencyConversion";
import { preventDecimalOverflow } from "utils/preventDecimalOverflow/preventDecimalOverflow";

export const TableFooter: FC = () => {
  const { rows } = useConversionTableApi();
  const { convertPlnToEur } = useCurrencyConverter();

  const sumPLN = preventDecimalOverflow(
    rows.reduce((acc, curr) => acc + curr.amountPLN, 0)
  );
  const sumEUR = convertPlnToEur(sumPLN);

  return (
    <tfoot>
      <tr>
        <td>
          <Typography level="h6" textAlign="left">
            Sum: {sumPLN} PLN ( {sumEUR} EUR )
          </Typography>
        </td>
      </tr>
    </tfoot>
  );
};
