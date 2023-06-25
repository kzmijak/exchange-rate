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
        <td colSpan={4}>
          <Typography level="body1" fontWeight="bold" textAlign="left">
            Sum: {sumPLN} PLN ( {sumEUR} EUR )
          </Typography>
        </td>
      </tr>
    </tfoot>
  );
};
