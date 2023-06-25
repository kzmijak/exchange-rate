import { FC } from "react";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { Typography } from "@mui/joy";
import { useCurrencyConverter } from "modules/CurrencyConversion";
import { columnsConfig } from "../../config/columnsConfig";

type AmountEURCellProps = { row: ConversionTableRow };

export const AmountEURCell: FC<AmountEURCellProps> = ({ row }) => {
  const { convertPlnToEur } = useCurrencyConverter();

  return (
    <td>
      <Typography textAlign={columnsConfig.AmountEUR.contentAlign}>
        {convertPlnToEur(row.amountPLN)}
      </Typography>
    </td>
  );
};
