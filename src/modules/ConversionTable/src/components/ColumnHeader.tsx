import { Box, Typography } from "@mui/joy";
import { FC } from "react";
import { columnWidths } from "../config/columnWidths";
import { ConversionTableColumn } from "../models/ConversionTableColumn";
import { columnHeaderNames } from "../config/columnHeaderNames";

type ColumnHeaderProps = {
  column: ConversionTableColumn;
};

export const ColumnHeader: FC<ColumnHeaderProps> = ({ column }) => {
  return (
    <Box component="th" width={columnWidths[column]}>
      <Typography>{columnHeaderNames[column]}</Typography>
    </Box>
  );
};
