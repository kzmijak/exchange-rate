export const preventDecimalOverflow = (overflowing: number) =>
  parseFloat(overflowing.toFixed(2));
