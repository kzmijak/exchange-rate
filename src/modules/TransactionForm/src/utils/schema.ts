import * as yup from "yup";

export const schema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title must have at least 5 characters."),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .min(1, "Amount must be positive")
    .required("Amount is required"),
});
