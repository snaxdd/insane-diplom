'use strict';

import SendForm from './sendForm';

import toggle from './togglePhone';
import menu from './toggleMenu';
import smoothScroll from './smoothScroll';
import repairModal from './repairModal';
import mask from './phoneMask';
import domElems from './DOMElements';
import popupOpen from './popupOpen';
import { dirname } from 'path';
import openPopup from './popupOpen';
import repairSlider from './repairSlider';

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

  //Privacy popup
  if (target.closest('.link-privacy')) {
    openPopup(domElems.popup.privacy);
  }

  if (target.closest('.repair-slider')) {
    let target = event.target;

    //Toggle nav active class
    if (target.classList.contains('repair-types-nav__item')) {
      repairSlider.toggleActiveBtn(target);
    }

    //Arrow next - desk
    if (target.closest('#repair-types-arrow_right')) {
      repairSlider.nextSlide();
    }

    //Arrow prev - desk
    if (target.closest('#repair-types-arrow_left')) {
      repairSlider.prevSlide();
    }

    //Arrow next - mobile 
    if (target.closest('#nav-arrow-repair-right_base')) {
      repairSlider.mobileNext();
    }

    //Arrow next - mobile 
    if (target.closest('#nav-arrow-repair-left_base')) {
      repairSlider.mobilePrev();
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

//Formula mouse events
domElems.formula.items.forEach(item => {
  item.addEventListener('mouseenter', event => {
    const target = event.target,
      popup = target.querySelector('.formula-item-popup'),
      popupText = popup.querySelector('.formula-text'),
      popupParent = popup.closest('.row'),
      coords = popup.getBoundingClientRect().top;

    if (coords < 0) {
      popup.style = '';
      popupText.style = '';

      let styleStr = 'transform: rotate(180deg) translateY(-100%);' +
      'bottom: 0; visibility: visible; opacity: 1';
      
      popupParent.style.zIndex = 10;
      popup.style = styleStr;
      popupText.style.transform = 'rotate(180deg)';
    } else {
      popupParent.style.zIndex = 10;
      popupText.style = '';
      popup.style = 'visibility: visible; opacity: 1;';
    }

    target.addEventListener('mouseleave', event => {
      popup.style = '';
      popupText.style = '';
      popupParent.style.zIndex = 1;
      popup.style.visibility = 'hidden';
    });
  });
});

window.addEventListener('resize', () => {
  menu.resolution = window.innerWidth;
  menu.menuPopup.style.visibility = 'hidden';

  if (menu.resolution > 576) {
    menu.menuDialog.style.transform = 'translate3d(100%, 0, 0)';
  } else {
    menu.menuDialog.style.transform = 'translate3d(0, -100%, 0)';
  }

  repairSlider.getMobileNavSettings();
});