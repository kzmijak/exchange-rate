import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { OptionsCell } from "../../../src/components/cells/OptionsCell";
import { row1 } from "../../__fixtures__/rows";
import { renderWithApi } from "../../__fixtures__/renderWithApi";
import userEvent from "@testing-library/user-event";

describe("TitleCell", () => {
  const Component = () => <OptionsCell row={row1} />;
  const deleteButtonDOM = () => screen.getByRole("button", { name: "Delete" });

  it("should match snapshot", () => {
    expect(renderWithApi(<Component />).container).toMatchSnapshot();
  });

  it("should contain Delete button", async () => {
    const deleteRow = vi.fn();
    renderWithApi(<Component />, { deleteRow });
    expect(deleteButtonDOM()).toBeInTheDocument();
    await userEvent.click(deleteButtonDOM());
    expect(deleteRow).toHaveBeenCalledOnce();
  });
});
