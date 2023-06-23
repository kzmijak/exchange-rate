import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { TransactionFormContent } from "../../..";
import { Label } from "../utils/Label";
import { FormHelperText, Input } from "@mui/joy";

type TitleControlProps = {
  control: Control<TransactionFormContent>;
};

export const TitleControl: FC<TitleControlProps> = ({ control }) => {
  const { field, fieldState } = useController({
    control,
    name: "title",
  });

  return (
    <Label label="Title of transaction">
      <Input {...field} fullWidth placeholder="ex. Busk ticket" />
      {fieldState.error && (
        <FormHelperText color="danger.500">
          {fieldState.error.message}
        </FormHelperText>
      )}
    </Label>
  );
};
