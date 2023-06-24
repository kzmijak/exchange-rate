import { cutDecimals } from "../../../src/utils/utils/cutDecimals";

describe("cutDecimals", () => {
  it("should trim to second decimals place for large decimals", () => {
    const tested = 1.23456;
    const expected = 1.23;
    const result = cutDecimals(tested);
    expect(result).toBe(expected);
  });

  it("should preserve decimal spaces for numbers with one decimal space", () => {
    const tested = 1.5;
    const expected = 1.5;
    const result = cutDecimals(tested);
    expect(result).toBe(expected);
  });

  it("should bring the overflowing number up", () => {
    const tested = 1.566666;
    const expected = 1.57;
    const result = cutDecimals(tested);
    expect(result).toBe(expected);
  });
});
