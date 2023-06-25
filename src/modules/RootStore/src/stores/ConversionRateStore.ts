import { action, computed, makeObservable, observable } from "mobx";

const DEFAULT_CONVERSION_RATE = 4.382;

export class ConversionRateStore {
  eurToPln: number;

  constructor(eurToPln = DEFAULT_CONVERSION_RATE) {
    makeObservable(this, {
      eurToPln: observable,
      changeRate: action,
      plnToEur: computed,
    });
    this.eurToPln = eurToPln;
  }

  changeRate(newRate: number) {
    this.eurToPln = newRate;
  }

  get plnToEur() {
    return 1 / this.eurToPln;
  }
}

export const conversionRateStore = new ConversionRateStore();
