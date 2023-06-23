import { FC } from "react";
import { Box, Typography } from "@mui/joy";
import { ConversionTableRow } from "../../models/ConversionTableRow";

type TitleCellProps = { row: ConversionTableRow };

export const TitleCell: FC<TitleCellProps> = ({ row }) => {
  return (
    <Box component="td">
      <Typography>{row.title}</Typography>
    </Box>
  );
};
