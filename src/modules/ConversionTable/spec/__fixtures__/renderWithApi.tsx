import { RenderOptions, render } from "@testing-library/react";
import {
  ConversionTableApiContext,
  ConversionTableApiContextType,
} from "modules/ConversionTable/src/contexts/ConversionTableApiContext";
import { JSX } from "react";
import { rows as preloadedRows } from "./rows";

type Options = RenderOptions & Partial<ConversionTableApiContextType>;

export const renderWithApi = (ui: JSX.Element, options: Options = {}) => {
  const { deleteRow = () => null, rows = preloadedRows } = options;

  return render(
    <ConversionTableApiContext.Provider value={{ deleteRow, rows }}>
      {ui}
    </ConversionTableApiContext.Provider>,
    options
  );
};
