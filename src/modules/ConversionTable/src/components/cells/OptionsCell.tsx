import { Box, Button } from "@mui/joy";
import { FC } from "react";
import { ConversionTableRow } from "../../models/ConversionTableRow";

type OptionsCellProps = {
  row: ConversionTableRow;
};

export const OptionsCell: FC<OptionsCellProps> = ({ row }) => {
  const handleClick = () =>
    alert(`I REALLY WANT TO DELETE THIS WHOLE GUY ${row.title} `);
  return (
    <Box component="td">
      <Button onClick={handleClick}>Delete</Button>
    </Box>
  );
};
