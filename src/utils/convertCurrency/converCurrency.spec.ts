import { expect } from "vitest";
import { convertEurToPln, convertPlnToEur } from "./convertCurrency";

describe("convertCurrency", () => {
  describe("convertEurToPln", () => {
    it("should convert euro to zlotys, cutting to 2 decimal places", () => {
      expect(convertEurToPln(22.82)).toBe(100);
    });
  });
  describe("convertPlnToEur", () => {
    it("should convert zlotys to euro, cutting to 2 decimal places", () => {
      expect(convertPlnToEur(20)).toBe(4.56);
    });
  });
});
