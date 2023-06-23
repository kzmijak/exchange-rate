import { FC } from "react";
import { ConversionTableRow } from "../models/ConversionTableRow";
import { AmountEURCell, AmountPLNCell, OptionsCell, TitleCell } from "./cells";

export type TableBodyProps = {
  rows: ConversionTableRow[];
};

export const TableBody: FC<TableBodyProps> = ({ rows }) => {
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
