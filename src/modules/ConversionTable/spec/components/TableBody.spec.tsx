import { describe, it, expect } from "vitest";
import { TableBody } from "../../src/components/TableBody";
import { renderWithApi } from "../__fixtures__/renderWithApi";

describe("TableBody", () => {
  const Component = () => <TableBody />;

  it("should match snapshot", () => {
    expect(renderWithApi(<Component />).container).toMatchSnapshot();
  });
});
