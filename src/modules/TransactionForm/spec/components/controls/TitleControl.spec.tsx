import { describe, it, expect } from "vitest";
import { render, renderHook } from "@testing-library/react";
import { TitleControl } from "../../../src/components/controls/TitleControl";
import { useForm } from "react-hook-form";
import { TransactionFormContent } from "modules/TransactionForm";

describe("TitleControl", () => {
  const { result } = renderHook(() => useForm<TransactionFormContent>());
  const Component = () => <TitleControl control={result.current.control} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });
});
