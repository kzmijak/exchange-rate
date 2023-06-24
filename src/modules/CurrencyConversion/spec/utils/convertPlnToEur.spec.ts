import { expect } from "vitest";
import { convertPlnToEur } from "../../src/utils/convertPlnToEur";

const EUR_TO_PLN_RATE = 4.382;

describe("convertPlnToEur", () => {
  it("should convert zlotys to euro, cutting to 2 decimal places", () => {
    expect(convertPlnToEur(20, EUR_TO_PLN_RATE)).toBe(4.56);
  });
});
