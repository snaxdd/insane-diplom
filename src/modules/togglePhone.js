'use strict';
const secondPhone = document.querySelector('.header-contacts__phone-number-accord'),
      secondPhoneLink = secondPhone.querySelector('.header-contacts__phone-number');

class TogglePhone {
  constructor(secondPhone, secondPhoneLink) {
    this.toggleFlag = false;
    this.secondPhone = secondPhone;
    this.secondPhoneLink = secondPhoneLink;
  }

  hide() {
    this.secondPhone.style.top = '0%';
    this.secondPhoneLink.style.opacity = '0';
  }

  show() {
    this.secondPhone.style.top = '100%';
    this.secondPhoneLink.style.opacity = '100';
  }
}

const toggle = new TogglePhone(secondPhone, secondPhoneLink);

export default toggle;