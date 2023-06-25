import { expect } from "vitest";
import { convertEurToPln } from "../../src/utils/convertEurToPln";

const EUR_TO_PLN_RATE = 4.382;

describe("convertEurToPln", () => {
  it("should convert euro to zlotys, cutting to 2 decimal places", () => {
    expect(convertEurToPln(22.82, EUR_TO_PLN_RATE)).toBe(100);
  });
});
