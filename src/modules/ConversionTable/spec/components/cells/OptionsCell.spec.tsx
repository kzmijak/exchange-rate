import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { OptionsCell } from "../../../src/components/cells/OptionsCell";
import { row1 } from "../../__fixtures__/rows";

describe("TitleCell", () => {
  const Component = () => <OptionsCell row={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should contain Delete button", () => {
    render(<Component />);
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });
});
