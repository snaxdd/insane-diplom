'use strict';

const togglePhone = () => {
  const toggleArrow = document.querySelector('.header-contacts__arrow'),
    secondPhone = document.querySelector('.header-contacts__phone-number-accord'),
    secondPhoneLink = secondPhone.querySelector('.header-contacts__phone-number');

  let flag = false;

  const showPhone = () => {
    if (!flag) {
      secondPhone.style.top = '100%';
      secondPhoneLink.style.opacity = '100';
      flag = true;
    } else {
      secondPhone.style.top = '0%';
      secondPhoneLink.style.opacity = '0';
      flag = false;
    }
  };

  toggleArrow.addEventListener('click', showPhone);
};

togglePhone();