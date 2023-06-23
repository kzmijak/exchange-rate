import { describe, it, expect } from "vitest";
import { TableBody } from "../../src/components/TableBody";
import { rows } from "../__fixtures__/rows";
import { render } from "@testing-library/react";

describe("TableBody", () => {
  const Component = () => <TableBody rows={rows} />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });
});
