import "./App.css";
import { Container, Stack, Typography } from "@mui/joy";
import {
  TransactionForm,
  TransactionFormContent,
} from "./modules/TransactionForm";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState<TransactionFormContent[]>(
    []
  );

  const insertTransaction = (transaction: TransactionFormContent) => {
    setTransactions((currTransactions) => [...currTransactions, transaction]);
  };

  return (
    <Container component="body">
      <Stack component="main" spacing={4}>
        <Stack
          component="nav"
          justifyContent="space-between"
          direction="row"
          alignItems="baseline"
          spacing={2}
        >
          <Typography level="h1">List of expenses</Typography>
          <Typography level="h6">1EUR = 4,384 PLN</Typography>
        </Stack>

        <Stack component="section" direction="row">
          <TransactionForm onSubmit={insertTransaction} />
        </Stack>

        {transactions.map((transaction) => (
          <Typography key={transaction.title}>
            {transaction.title} {transaction.amount}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}

export default App;
