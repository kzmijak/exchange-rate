import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AmountPLNCell } from "../../../src/components/cells/AmountPLNCell";
import { row1 } from "../../__fixtures__/rows";

describe("AmountPLNCell", () => {
  const Component = () => <AmountPLNCell row={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should show amount in zlotys", () => {
    render(<Component />);
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
