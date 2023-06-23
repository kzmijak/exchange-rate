import { Button, Container, Stack, Typography } from "@mui/joy";
import {
  TransactionForm,
  TransactionFormContent,
} from "./modules/TransactionForm";
import { FC, useState } from "react";
import { ConversionTable } from "modules/ConversionTable";
import { TransactionModel } from "models/TransactionModel";
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";
import { ConversionRate } from "modules/CurrencyConversions";

type AppProps = { conversionRate: ConversionRate };

export const App: FC<AppProps> = observer(({ conversionRate }) => {
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);

  const insertTransaction = (transaction: TransactionFormContent) => {
    const newTransaction = { ...transaction, id: nanoid() };
    setTransactions((currTransactions) => [
      ...currTransactions,
      newTransaction,
    ]);
  };

  const increaseConversionRate = () => {
    conversionRate.changeRate(conversionRate.eurToPln + 1);
  };

  return (
    <Container
      component="main"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Stack spacing={4}>
        <Stack
          component="nav"
          justifyContent="space-between"
          direction="row"
          alignItems="baseline"
          spacing={2}
        >
          <Typography level="h1">List of expenses</Typography>
          <Typography level="h6">
            1EUR = {conversionRate.eurToPln} PLN
          </Typography>
          <Button onClick={increaseConversionRate}>DO STUPID</Button>
        </Stack>

        <Stack component="section" direction="row">
          <TransactionForm onSubmit={insertTransaction} />
        </Stack>

        <ConversionTable transactions={transactions} />
      </Stack>
    </Container>
  );
});
