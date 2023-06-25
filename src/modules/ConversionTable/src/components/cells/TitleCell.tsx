import { FC } from "react";
import { Typography } from "@mui/joy";
import { ConversionTableRow } from "../../models/ConversionTableRow";

type TitleCellProps = { row: ConversionTableRow };

export const TitleCell: FC<TitleCellProps> = ({ row }) => {
  return (
    <td>
      <Typography>{row.title}</Typography>
    </td>
  );
};
