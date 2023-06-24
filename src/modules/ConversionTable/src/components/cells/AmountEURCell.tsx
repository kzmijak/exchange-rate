import { FC } from "react";
import { ConversionTableRow } from "../../models/ConversionTableRow";
import { Box, Typography } from "@mui/joy";
import { observer } from "mobx-react-lite";
import { useCurrencyConverter } from "modules/CurrencyConversion";

type AmountEURCellProps = { row: ConversionTableRow };

export const AmountEURCell: FC<AmountEURCellProps> = observer(({ row }) => {
  const { convertPlnToEur } = useCurrencyConverter();

  return (
    <Box component="td">
      <Typography textAlign="right">
        {convertPlnToEur(row.amountPLN)}
      </Typography>
    </Box>
  );
});
