export const row1 = {
  id: "1",
  title: "New book about Rust",
  amountPLN: 100,
} as const;
export const row2 = {
  id: "2",
  title: "Snacks for a football match",
  amountPLN: 20,
} as const;
export const row3 = {
  id: "3",
  title: "Bus ticket",
  amountPLN: 2.55,
} as const;

export const rows = [row1, row2, row3];
