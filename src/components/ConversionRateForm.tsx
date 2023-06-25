import { Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";
import { observer } from "mobx-react-lite";
import { useRootStore } from "modules/RootStore";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { NumericFormat } from "react-number-format";

type ConversionRateFormProps = {
  onSubmitSuccess: () => void;
};
export const ConversionRateForm: FC<ConversionRateFormProps> = observer(
  ({ onSubmitSuccess }) => {
    const { conversionRateStore } = useRootStore();
    const [inputRate, setInputRate] = useState(
      conversionRateStore.eurToPln.toString()
    );

    const handleRateInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputRate(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      if (inputRate) {
        const rateNumber = Number(inputRate);
        if (!isNaN(rateNumber)) {
          conversionRateStore.changeRate(rateNumber);
          onSubmitSuccess();
        }
      }
    };

    return (
      <Stack component="form" onSubmit={handleSubmit} spacing={3}>
        <FormControl>
          <FormLabel>EUR to PLN</FormLabel>
          <NumericFormat
            customInput={Input}
            autoFocus
            placeholder="Ex. 4.382"
            onChange={handleRateInputChange}
            value={conversionRateStore.eurToPln}
          />
        </FormControl>
        <Button type="submit">Apply</Button>
      </Stack>
    );
  }
);
