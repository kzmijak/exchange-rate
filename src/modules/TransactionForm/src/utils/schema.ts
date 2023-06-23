import * as yup from "yup";

export const schema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title should have at least 5 characters."),
  amount: yup.number().required("Amount is required"),
});
