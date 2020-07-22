'use strict';

import toggle from './togglePhone';
import menu from './toggleMenu';
import smoothScroll from './smoothScroll';

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
});

window.addEventListener('resize', () => {
  menu.resolution = window.innerWidth;

  if (menu.resolution > 576) {
    menu.menuDialog.style.transform = 'translate3d(100%, 0, 0)';
  } else {
    menu.menuDialog.style.transform = 'translate3d(0, -100%, 0)';
  }
});