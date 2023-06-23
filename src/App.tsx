import { Container, Stack, Typography } from "@mui/joy";
import {
  TransactionForm,
  TransactionFormContent,
} from "./modules/TransactionForm";
import { useState } from "react";
import { ConversionTable } from "modules/ConversionTable";
import { TransactionModel } from "models/TransactionModel";
import { nanoid } from "nanoid";
import { EUR_TO_PLN } from "utils/convertCurrency";

function App() {
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);

  const insertTransaction = (transaction: TransactionFormContent) => {
    const newTransaction = { ...transaction, id: nanoid() };
    setTransactions((currTransactions) => [
      ...currTransactions,
      newTransaction,
    ]);
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
          <Typography level="h6">1EUR = {EUR_TO_PLN} PLN</Typography>
        </Stack>

        <Stack component="section" direction="row">
          <TransactionForm onSubmit={insertTransaction} />
        </Stack>

        <ConversionTable transactions={transactions} />
      </Stack>
    </Container>
  );
}

export default App;
