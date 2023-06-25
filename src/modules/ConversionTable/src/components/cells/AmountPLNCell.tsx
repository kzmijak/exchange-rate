import { FC } from "react";
import { Typography } from "@mui/joy";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { columnsConfig } from "../../config/columnsConfig";

type AmountPLNCellProps = { row: ConversionTableRow };

export const AmountPLNCell: FC<AmountPLNCellProps> = ({ row }) => {
  return (
    <td>
      <Typography textAlign={columnsConfig.AmountPLN.contentAlign}>
        {row.amountPLN}
      </Typography>
    </td>
  );
};
