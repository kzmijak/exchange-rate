import {
  Button,
  Container,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import { TransactionForm } from "./modules/TransactionForm";
import { FC, useState } from "react";
import { ConversionTable } from "modules/ConversionTable";
import { observer } from "mobx-react-lite";
import { useRootStore } from "modules/RootStore";
import { ConversionRateForm } from "components/ConversionRateForm";

export const App: FC = observer(() => {
  const { transactionsStore, conversionRateStore } = useRootStore();

  const [conversionFormOpen, setConversionFormOpen] = useState(false);
  const openConversionRateForm = () => setConversionFormOpen(true);
  const closeConversionRateForm = () => setConversionFormOpen(false);

  return (
    <>
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
            <Stack direction="row" spacing={2}>
              <Typography level="h6">
                1EUR = {conversionRateStore.eurToPln} PLN
              </Typography>
              <Button size="sm" onClick={openConversionRateForm}>
                Change
              </Button>
            </Stack>
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
      <Modal open={conversionFormOpen} onClose={closeConversionRateForm}>
        <ModalDialog>
          <ConversionRateForm onSubmitSuccess={closeConversionRateForm} />
        </ModalDialog>
      </Modal>
    </>
  );
});
