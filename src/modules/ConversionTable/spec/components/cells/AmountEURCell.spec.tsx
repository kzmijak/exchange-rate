import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { AmountEURCell } from "../../../src/components/cells/AmountEURCell";
import { row1 } from "../../__fixtures__/rows";
import { renderWithStore } from "testUtils/renderWithStore";

describe("AmountEURCell", () => {
  const Component = () => <AmountEURCell row={row1} />;

  it("should match snapshot", () => {
    expect(renderWithStore(<Component />).container).toMatchSnapshot();
  });

  it("should show amount converted from zlotys to euros", () => {
    renderWithStore(<Component />);
    expect(screen.getByText("22.82")).toBeInTheDocument();
  });
});
