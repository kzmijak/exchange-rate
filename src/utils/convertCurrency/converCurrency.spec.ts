import { expect } from "vitest";
import { convertEurToPln, convertPlnToEur } from "./convertCurrency";

const EUR_TO_PLN_RATE = 4.382;

describe("convertCurrency", () => {
  describe("convertEurToPln", () => {
    it("should convert euro to zlotys, cutting to 2 decimal places", () => {
      expect(convertEurToPln(22.82, EUR_TO_PLN_RATE)).toBe(100);
    });
  });
  describe("convertPlnToEur", () => {
    it("should convert zlotys to euro, cutting to 2 decimal places", () => {
      expect(convertPlnToEur(20, EUR_TO_PLN_RATE)).toBe(4.56);
    });
  });
});
