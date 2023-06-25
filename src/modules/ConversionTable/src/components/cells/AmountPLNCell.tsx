import { FC } from "react";
import { Typography } from "@mui/joy";
import { ConversionTableRow } from "../../models/ConversionTableRow";

type AmountPLNCellProps = { row: ConversionTableRow };

export const AmountPLNCell: FC<AmountPLNCellProps> = ({ row }) => {
  return (
    <td>
      <Typography textAlign="right">{row.amountPLN}</Typography>
    </td>
  );
};
