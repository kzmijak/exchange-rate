import { action, computed, makeObservable, observable } from "mobx";

export class ConversionRateStore {
  eurToPln = 4.382;

  constructor() {
    makeObservable(this, {
      eurToPln: observable,
      changeRate: action,
      plnToEur: computed,
    });
  }

  changeRate(newRate: number) {
    this.eurToPln = newRate;
  }

  get plnToEur() {
    return 1 / this.eurToPln;
  }
}

export const conversionRateStore = new ConversionRateStore();
