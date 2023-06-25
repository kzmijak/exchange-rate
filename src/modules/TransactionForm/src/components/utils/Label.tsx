import { Stack, FormControl, FormLabel, Box } from "@mui/joy";
import { FC, ReactNode } from "react";

type LabelProps = {
  label: string;
  children: ReactNode;
};

export const Label: FC<LabelProps> = (props) => {
  return (
    <Stack component={FormControl} direction="row" spacing={2}>
      <FormLabel sx={{ width: 80 }}>{props.label}</FormLabel>
      <Box flex={1}>{props.children}</Box>
    </Stack>
  );
};
