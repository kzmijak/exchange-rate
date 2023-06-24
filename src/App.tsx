import { Button, Container, Stack, Typography } from "@mui/joy";
import { TransactionForm } from "./modules/TransactionForm";
import { FC } from "react";
import { ConversionTable } from "modules/ConversionTable";
import { observer } from "mobx-react-lite";
import { useRootStore } from "modules/RootStore";

export const App: FC = observer(() => {
  const { transactionsStore, conversionRateStore } = useRootStore();
  const increaseConversionRate = () => {
    conversionRateStore.changeRate(conversionRateStore.eurToPln + 1);
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
            1EUR = {conversionRateStore.eurToPln} PLN
          </Typography>
          <Button onClick={increaseConversionRate}>DO STUPID</Button>
        </Stack>

        <Stack component="section" direction="row">
          <TransactionForm onSubmit={transactionsStore.insert} />
        </Stack>

        <ConversionTable
          transactions={transactionsStore.transactions}
          onTransactionDelete={transactionsStore.deleteById}
        />
      </Stack>
    </Container>
  );
});
