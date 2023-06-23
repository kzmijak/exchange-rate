import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  TransactionForm,
  TransactionFormProps,
} from "../../src/components/TransactionForm";
import userEvent from "@testing-library/user-event";

const OK_TITLE = "proper title";
const OK_AMOUNT = 500;

describe("TransactionForm", () => {
  const titleInputDOM = () => screen.getByRole("textbox", { name: /Title/ });
  const amountInputDOM = () => screen.getByRole("textbox", { name: /Amount/ });
  const submitButtonDOM = () => screen.getByRole("button", { name: /Add/ });
  const submitHandler = vi.fn();

  const Component = (props: Partial<TransactionFormProps>) => (
    <TransactionForm onSubmit={submitHandler} {...props} />
  );

  afterEach(() => {
    submitHandler.mockReset();
  });

  it("should match snapshot", () => {
    expect(render(<Component />).container).toMatchSnapshot();
  });

  it("should call onSubmit when fills form is filled properly", async () => {
    render(<Component />);
    await userEvent.type(titleInputDOM(), OK_TITLE);
    await userEvent.type(amountInputDOM(), OK_AMOUNT.toString());
    await userEvent.click(submitButtonDOM());
    expect(submitHandler).toHaveBeenCalledOnce();
  });

  it("should properly forward focus with tabs", async () => {
    render(<Component />);
    await userEvent.click(titleInputDOM());
    expect(titleInputDOM()).toHaveFocus();
    await userEvent.tab();
    expect(amountInputDOM()).toHaveFocus();
    await userEvent.tab();
    expect(submitButtonDOM()).toHaveFocus();
  });

  it("should trigger submit on enter click", async () => {
    render(
      <Component defaultValues={{ amount: OK_AMOUNT, title: OK_TITLE }} />
    );
    await userEvent.click(titleInputDOM());
    await userEvent.keyboard("{enter}");
    expect(submitHandler).toHaveBeenCalledOnce();
  });

  describe("title validation", () => {
    it("is required", async () => {
      render(<Component defaultValues={{ amount: OK_AMOUNT }} />);
      await userEvent.click(submitButtonDOM());
      expect(screen.getByText("Title is required")).toBeVisible();
      expect(submitHandler).not.toHaveBeenCalled();
    });

    it("has to be at least 5 characters long", async () => {
      render(
        <Component defaultValues={{ amount: OK_AMOUNT, title: "1234" }} />
      );
      await userEvent.click(submitButtonDOM());
      expect(
        screen.getByText("Title should have at least 5 characters.")
      ).toBeVisible();
      expect(submitHandler).not.toHaveBeenCalled();
      await userEvent.type(titleInputDOM(), "5");
      expect(
        screen.queryByText("Title should have at least 5 characters.")
      ).not.toBeInTheDocument();
      await userEvent.click(submitButtonDOM());
      expect(submitHandler).toHaveBeenCalledOnce();
    });
  });

  describe("amount validation", () => {
    it("is required", async () => {
      render(<Component defaultValues={{ title: OK_TITLE }} />);
      await userEvent.click(submitButtonDOM());
      expect(screen.getByText("Amount is required")).toBeVisible();
      expect(submitHandler).not.toHaveBeenCalled();
    });
  });
});
