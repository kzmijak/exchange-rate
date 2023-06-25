import { Button } from "@mui/joy";
import { FC } from "react";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { useConversionTableApi } from "../../contexts/ConversionTableApiContext";
import { columnsConfig } from "../../config/columnsConfig";

type OptionsCellProps = {
  row: ConversionTableRow;
};

export const OptionsCell: FC<OptionsCellProps> = ({ row }) => {
  const { deleteRow } = useConversionTableApi();
  const handleDeleteClick = () => {
    deleteRow(row.id);
  };

  return (
    <td align={columnsConfig.Options.contentAlign}>
      <Button onClick={handleDeleteClick} size="sm">
        Delete
      </Button>
    </td>
  );
};
