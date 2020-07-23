'use strict';

class PhoneMask {
  constructor(mask = '+7(___)-___-__-__') {
    this.mask = mask;
  }

  valid(target) {
    const value = target.value,
      lastLet = value[value.length - 1],
      regex1 = /\_/,
      regex2 = /\d/;

    if (regex2.test(lastLet)) {
      target.value = target.value.slice(0, value.length - 1);

      for (let i = value.length - 1; i < this.mask.length; i++) {
        if (!regex1.test(this.mask[i])) {
          target.value += this.mask[i];
        } else {
          target.value += lastLet;
          break;
        }
      }
    } else {
      target.value = target.value.slice(0, value.length - 1);
    }
  }
}

const mask = new PhoneMask();

export default mask;