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
  },
  formula: {
    items: [...document.querySelectorAll('.formula-item__icon')]
  },
  repairSlider: {
    nav: [...document.querySelectorAll('.repair-types-nav__item')],
    repairSliderItems: [...document.querySelectorAll('.repair-types-slider__item')],
    arrows: {
      arrowLeft: document.getElementById('#repair-types-arrow_left'),
      arrowRight: document.getElementById('#repair-types-arrow_right')
    },
    sliderCounter: {
      current: document.querySelector('.slider-counter-content__current'),
      total: document.querySelector('.slider-counter-content__total')
    },
    arrowsMobile: {
      arrowLeft: document.getElementById('nav-arrow-repair-left_base'),
      arrowRight: document.getElementById('nav-arrow-repair-right_base')
    },
    sliderTrack: document.querySelector('.nav-list.nav-list-repair'),
    sliderWindow: document.querySelector('.nav.repair-types-nav')
  }
};

export default domElems;