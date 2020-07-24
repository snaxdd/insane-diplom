'use strict';

const domElems = {
  menu: {
    icon: document.querySelector('.menu__icon'),
    popup: document.querySelector('.popup.popup-menu'),
    dialog: document.querySelector('.popup-dialog-menu')
  },
  phone: {
    secondPhone: document.querySelector('.header-contacts__phone-number-accord'),
    secondPhoneLink: document.querySelector(`.header-contacts__phone-number-accord > 
    .header-contacts__phone-number`)
  },
  repairModal: {
    links: document.querySelectorAll('.link-list-repair'),
    popup: document.querySelector('.popup.popup-repair-types'),
    close: document.querySelector('.popup.popup-repair-types > .close')
  },
  inputs: {
    phones: [...document.querySelectorAll('input[name="phone"]')]
  },
  popup: {
    privacy: document.querySelector('.popup.popup-privacy')
  }
};

export default domElems;