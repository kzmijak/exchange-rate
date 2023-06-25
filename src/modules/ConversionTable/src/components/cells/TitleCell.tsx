import { FC } from "react";
import { Typography } from "@mui/joy";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { columnsConfig } from "../../config/columnsConfig";

type TitleCellProps = { row: ConversionTableRow };

export const TitleCell: FC<TitleCellProps> = ({ row }) => {
  return (
    <td>
      <Typography textAlign={columnsConfig.Title.contentAlign}>
        {row.title}
      </Typography>
    </td>
  );
};
