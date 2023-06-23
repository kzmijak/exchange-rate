import { FC } from "react";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { Box, Typography } from "@mui/joy";
import { convertPlnToEur } from "utils/convertCurrency";

type AmountEURCellProps = { row: ConversionTableRow };

export const AmountEURCell: FC<AmountEURCellProps> = ({ row }) => {
  return (
    <Box component="td">
      <Typography textAlign="right">
        {convertPlnToEur(row.amountPLN)}
      </Typography>
    </Box>
  );
};
