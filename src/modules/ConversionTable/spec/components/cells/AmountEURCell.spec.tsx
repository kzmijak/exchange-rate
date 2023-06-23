import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AmountEURCell } from "../../../src/components/cells/AmountEURCell";
import { row1 } from "../../__fixtures__/rows";

describe("AmountEURCell", () => {
  const Component = () => <AmountEURCell row={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should show amount converted from zlotys to euros", () => {
    render(<Component />);
    expect(screen.getByText("22.82")).toBeInTheDocument();
  });
});
