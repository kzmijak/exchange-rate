import { Box, Button } from "@mui/joy";
import { FC } from "react";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { useConversionTableApi } from "../../contexts/ConversionTableApiContext";

type OptionsCellProps = {
  row: ConversionTableRow;
};

export const OptionsCell: FC<OptionsCellProps> = ({ row }) => {
  const { deleteRow } = useConversionTableApi();
  const handleDeleteClick = () => {
    deleteRow(row.id);
  };

  return (
    <Box component="td">
      <Button onClick={handleDeleteClick}>Delete</Button>
    </Box>
  );
};
