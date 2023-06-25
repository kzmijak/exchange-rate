import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { TableFooter } from "../../src/components/TableFooter";
import { renderWithApi } from "../__fixtures__/renderWithApi";

describe("TableFooter", () => {
  const Component = () => <TableFooter />;

  it("should match snapshot", () => {
    expect(renderWithApi(<Component />).container).toMatchSnapshot();
  });

  it("should properly calculate sums", () => {
    renderWithApi(<Component />);

    expect(screen.getByText(/Sum:\s*122.55\s*PLN\s*\(\s*27.97\s*EUR\s*\)/)); // Sum: 122.55 PLN (27.97 EUR)
  });
});
