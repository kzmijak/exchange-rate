import { describe, it, expect } from "vitest";
import { render, renderHook } from "@testing-library/react";
import { AmountControl } from "../../../src/components/controls/AmountControl";
import { useForm } from "react-hook-form";
import { TransactionFormContent } from "modules/TransactionForm";

describe("AmountControl", () => {
  const { result } = renderHook(() => useForm<TransactionFormContent>());
  const Component = () => <AmountControl control={result.current.control} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });
});
