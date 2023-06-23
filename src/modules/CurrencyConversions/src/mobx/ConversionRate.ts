import { action, computed, makeObservable, observable } from "mobx";

export class ConversionRate {
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
