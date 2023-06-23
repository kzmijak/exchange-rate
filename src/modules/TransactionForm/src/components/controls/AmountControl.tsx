import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { TransactionFormContent } from "../../..";
import { Label } from "../utils/Label";
import { FormHelperText, Input } from "@mui/joy";

type AmountControlProps = {
  control: Control<TransactionFormContent>;
};

export const AmountControl: FC<AmountControlProps> = ({ control }) => {
  const { field, fieldState } = useController({
    control,
    name: "amount",
  });

  return (
    <Label label="Amount (in PLN)">
      <Input
        {...field}
        fullWidth
        type="number"
        placeholder="ex. 25,99"
        endDecorator="zł"
      />
      {fieldState.error && (
        <FormHelperText>{fieldState.error.message}</FormHelperText>
      )}
    </Label>
  );
};
