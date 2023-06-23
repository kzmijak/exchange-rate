import { FC } from "react";
import { TransactionFormContent } from "../models/TransactionFormContent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/schema";
import { Button, Input, Stack, Typography } from "@mui/joy";

type TransactionFormProps = {
  defaultValues?: Partial<TransactionFormContent>;
  onSubmit: (formContent: TransactionFormContent) => void;
};

export const TransactionForm: FC<TransactionFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm<TransactionFormContent>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack flex={1}>
        <Stack direction="row">
          <Typography>Title of transaction</Typography>
          <Input {...register("title")} />
        </Stack>
        <Stack direction="row">
          <Typography>Amount (in PLN)</Typography>
          <Input {...register("amount")} />
        </Stack>
      </Stack>
      <Button type="submit">Add</Button>
    </Stack>
  );
};
