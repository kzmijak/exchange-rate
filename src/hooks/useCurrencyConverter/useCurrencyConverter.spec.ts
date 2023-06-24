import { renderHookWithStore } from "testUtils/renderWithStore";
import { useCurrencyConverter } from ".";
import { ConversionRateStore } from "modules/RootStore/src/stores/ConversionRateStore";

describe("useCurrencyConverter", () => {
  it("should read conversion rate from root store and calculate amount after conversion", () => {
    const EUR = 10;
    const EUR_TO_PLN_RATE = 10;
    const EXPECTED_PLN = 100;

    const { result } = renderHookWithStore(useCurrencyConverter, {
      store: { conversionRateStore: new ConversionRateStore(EUR_TO_PLN_RATE) },
    });

    expect(result.current.convertEurToPln(EUR)).toBe(EXPECTED_PLN);
  });
});
