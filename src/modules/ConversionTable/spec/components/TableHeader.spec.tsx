import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TableHeader } from "../../src/components/TableHeader";

describe("TableHeader", () => {
  const Component = () => <TableHeader />;

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should render table with headers", () => {
    render(<Component />);

    expect(screen.getByText("Title")).toBeVisible();
    expect(screen.getByText("Amount (PLN)")).toBeVisible();
    expect(screen.getByText("Amount (EUR)")).toBeVisible();
    expect(screen.getByText("Options")).toBeVisible();
  });
});
