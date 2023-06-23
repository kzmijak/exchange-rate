import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ConversionTable } from "../src/ConversionTable";
import { TransactionModel } from "models/TransactionModel";

const transactions = [{}, {}, {}] as TransactionModel[];

describe("ConversionTable", () => {
  const Component = () => <ConversionTable transactions={transactions} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });
});
