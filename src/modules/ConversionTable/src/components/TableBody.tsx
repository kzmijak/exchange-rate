import { FC } from "react";
import { AmountEURCell, AmountPLNCell, OptionsCell, TitleCell } from "./cells";
import { useConversionTableApi } from "../contexts/ConversionTableApiContext";

export const TableBody: FC = () => {
  const { rows } = useConversionTableApi();
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id} style={{ cursor: "pointer" }}>
          <TitleCell row={row} />
          <AmountPLNCell row={row} />
          <AmountEURCell row={row} />
          <OptionsCell row={row} />
        </tr>
      ))}
    </tbody>
  );
};
