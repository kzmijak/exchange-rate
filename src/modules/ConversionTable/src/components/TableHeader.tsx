import { FC } from "react";
import { conversionTableColumnConsts } from "../models/ConversionTableColumn";
import { ColumnHeader } from "./ColumnHeader";

export const TableHeader: FC = () => {
  return (
    <thead>
      <tr>
        {conversionTableColumnConsts.map((column) => (
          <ColumnHeader key={column} column={column} />
        ))}
      </tr>
    </thead>
  );
};
