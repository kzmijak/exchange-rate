import { FC } from "react";
import { Box, Typography } from "@mui/joy";
import { ConversionTableRow } from "../../models/ConversionTableRow";

type AmountPLNCellProps = { row: ConversionTableRow };

export const AmountPLNCell: FC<AmountPLNCellProps> = ({ row }) => {
  return (
    <Box component="td">
      <Typography textAlign="right">{row.amountPLN}</Typography>
    </Box>
  );
};
