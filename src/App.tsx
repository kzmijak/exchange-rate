import {
  Box,
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
import { useRwd } from "utils/useRwd";

export const App: FC = observer(() => {
  const { transactionsStore, conversionRateStore } = useRootStore();
  const { isDesktop } = useRwd();

  const [conversionFormOpen, setConversionFormOpen] = useState(false);
  const openConversionRateForm = () => setConversionFormOpen(true);
  const closeConversionRateForm = () => setConversionFormOpen(false);

  const uiDirection = isDesktop ? "row" : "column";

  return (
    <>
      <Container
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={4}>
          <Box py={10}>
            <Stack
              justifyContent="space-between"
              direction={uiDirection}
              alignItems="baseline"
              spacing={2}
            >
              <Typography level="h1">List of expenses</Typography>
              <Stack
                direction="row"
                spacing={2}
                alignSelf="flex-end"
                padding={2}
              >
                <Typography level="body1" fontWeight="bold">
                  1EUR = {conversionRateStore.eurToPln} PLN
                </Typography>
                <Button size="sm" onClick={openConversionRateForm}>
                  Change
                </Button>
              </Stack>
            </Stack>
            <Stack justifyContent="center" alignItems="start" padding={2}>
              <TransactionForm
                onSubmit={transactionsStore.insert}
                direction={uiDirection}
              />
            </Stack>
          </Box>

          <Stack justifyContent="flex-end" alignItems="flex-end">
            <Button
              size="sm"
              disabled={transactionsStore.status !== "idle"}
              onClick={transactionsStore.fetchHistory}
            >
              Fetch sample
            </Button>
            <ConversionTable
              transactions={transactionsStore.transactions}
              onTransactionDelete={transactionsStore.deleteById}
            />
          </Stack>
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
