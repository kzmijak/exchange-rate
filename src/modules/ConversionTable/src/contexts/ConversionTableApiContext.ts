import { createContext, useContext } from "react";
import { ConversionTableRow } from "../models/ConversionTableRow";

export type ConversionTableApiContextType = {
  rows: ConversionTableRow[];
  deleteRow: (id: ConversionTableRow["id"]) => void;
};

export const ConversionTableApiContext =
  createContext<ConversionTableApiContextType>({
    deleteRow: () => null,
    rows: [],
  });

export const useConversionTableApi = () =>
  useContext(ConversionTableApiContext);
