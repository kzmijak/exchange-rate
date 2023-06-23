import { FC } from "react";
import { TransactionFormContent } from "../models/TransactionFormContent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/schema";
import { Button, Stack } from "@mui/joy";
import { TitleControl } from "./controls/TitleControl";
import { AmountControl } from "./controls/AmountControl";

type TransactionFormProps = {
  defaultValues?: Partial<TransactionFormContent>;
  onSubmit: (formContent: TransactionFormContent) => void;
};

export const TransactionForm: FC<TransactionFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm<TransactionFormContent>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction="row"
      spacing={2}
    >
      <Stack flex={1} spacing={3}>
        <TitleControl control={control} />
        <AmountControl control={control} />
      </Stack>
      <Stack justifyContent="end">
        <Button type="submit">Add</Button>
      </Stack>
    </Stack>
  );
};
