import { describe, it, expect } from "vitest";
import { ConversionTable } from "../src/ConversionTable";
import { TransactionModel } from "models/Transaction/src/TransactionModel";
import { renderWithStore } from "testUtils/renderWithStore";

const transactions = [{}, {}, {}] as TransactionModel[];

describe("ConversionTable", () => {
  const Component = () => (
    <ConversionTable
      transactions={transactions}
      onTransactionDelete={() => null}
    />
  );

  it("should match snapshot", () => {
    expect(renderWithStore(<Component />).container).toMatchSnapshot();
  });
});
