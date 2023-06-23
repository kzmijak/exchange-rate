import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TableFooter } from "../../src/components/TableFooter";
import { rows } from "../__fixtures__/rows";

describe("TableFooter", () => {
  const Component = () => <TableFooter rows={rows} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should properly calculate sums", () => {
    render(<Component />);

    expect(screen.getByText(/Sum:\s*122.55\s*PLN\s*\(\s*27.97\s*EUR\s*\)/)); // Sum: 122.55 PLN (27.97 EUR)
  });
});
