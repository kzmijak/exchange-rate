import { Box, Typography } from "@mui/joy";
import { FC } from "react";
import { columnsConfig } from "../config/columnsConfig";
import { ConversionTableColumn } from "../models/ConversionTableColumn";

type ColumnHeaderProps = {
  column: ConversionTableColumn;
};

export const ColumnHeader: FC<ColumnHeaderProps> = ({ column }) => {
  const { columnWidth, contentAlign, displayValue } = columnsConfig[column];
  return (
    <Box component="th" width={columnWidth}>
      <Typography textAlign={contentAlign}>{displayValue}</Typography>
    </Box>
  );
};
