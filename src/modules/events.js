'use strict';

import SendForm from './sendForm';

import toggle from './togglePhone';
import menu from './toggleMenu';
import smoothScroll from './smoothScroll';
import repairModal from './repairModal';
import mask from './phoneMask';
import domElems from './DOMElements';
import { dirname } from 'path';

document.body.addEventListener('click', event => {
  let target = event.target;

  //Header phone toggle
  if (target.closest('.header-contacts__arrow')) {
    if (!toggle.toggleFlag) {
      toggle.show();
      toggle.toggleFlag = true;
    } else {
      toggle.hide();
      toggle.toggleFlag = false;
    }
  }

  //Open menu
  if (target.closest('.menu__icon')) {
    menu.show();
  } else if (target.closest('.close.close-menu')) {
    menu.hide();
  }

  //Menu links smoothScroll
  if (target.closest('.popup-menu-nav__item') && target.className === 'menu-link') {
    event.preventDefault();
    smoothScroll(target);
    menu.hide();
  }

  //Scroll to top - footer button
  if (target.closest('.button-footer')) {
    event.preventDefault();
    target = target.closest('.button-footer');
    smoothScroll(target.firstChild);
  }

  //Show popup-repair-types
  if (target.closest('.link-list-repair')) {
    repairModal.show();
    menu.hide();
  } else if (target.closest('.close-repair')) {
    repairModal.hide();
  }

  //Send form
  if (target.closest('form')) {
    if ([...target.classList].includes('send-form')) {
      event.preventDefault();
      target = target.closest('form');

      try {
        const form = new SendForm(target, `${__dirname}server.php`);
        form.getData();
        form.sendData();
      } catch (err) {
        console.error('Ошибка:', err);
      }
    }
  }
});

document.body.addEventListener('input', event => {
  let target = event.target;

  //Phone mask
  if (domElems.inputs.phones.includes(target)) {
    mask.valid(target);
  }

});

window.addEventListener('resize', () => {
  menu.resolution = window.innerWidth;
  menu.menuPopup.style.visibility = 'hidden';

  if (menu.resolution > 576) {
    menu.menuDialog.style.transform = 'translate3d(100%, 0, 0)';
  } else {
    menu.menuDialog.style.transform = 'translate3d(0, -100%, 0)';
  }
});