import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TitleCell } from "../../../src/components/cells/TitleCell";
import { row1 } from "../../__fixtures__/rows";

describe("TitleCell", () => {
  const Component = () => <TitleCell row={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should show transaction title", () => {
    render(<Component />);
    expect(screen.getByText("New book about Rust")).toBeInTheDocument();
  });
});
