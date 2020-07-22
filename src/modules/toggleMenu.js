'use strict';

const toggleMenu = () => {
  const menuIcon = document.querySelector('.menu__icon'),
    menuPopup = document.querySelector('.popup.popup-menu'),
    menuDialog = menuPopup.querySelector('.popup-dialog-menu'),
    scrollTopBtn = document.querySelector('.button-footer');

  let resolution = window.innerWidth;
  
  const showMenu = () => {
    menuPopup.style.visibility = 'visible';
    
    if (resolution > 576) {
      menuDialog.style.transform = 'translate3d(0, 0, 0)';
    } else {
      menuDialog.style.transform = 'translate3d(0, 0, 0)';
    }
  };

  const closeMenu = () => {
    menuPopup.style.visibility = 'hidden';
    
    if (resolution > 576) {
      menuDialog.style.transform = 'translate3d(100%, 0, 0)';
    } else {
      menuDialog.style.transform = 'translate3d(0, -100%, 0)';
    }
  };

  const scrollToId = event => {
    event.preventDefault();
    let target = event.target,
      blockId = null;

    if (target.className === 'menu-link') {
      blockId = target.getAttribute('href').substr(1);

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth'
      });

      closeMenu();
    } else if (target.closest('.button-footer')) {
      target = target.closest('.button-footer');
      
      blockId = target.firstChild.getAttribute('href').substr(1);

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  window.addEventListener('resize', () => {
    resolution = window.innerWidth;

    if (resolution > 576) {
      menuDialog.style.transform = 'translate3d(100%, 0, 0)';
    } else {
      menuDialog.style.transform = 'translate3d(0, -100%, 0)';
    }
  });

  menuIcon.addEventListener('click', showMenu);

  menuPopup.addEventListener('click', event => {
    const target = event.target;

    if (target.className === 'close close-menu') {
      closeMenu();
    } else {
      scrollToId(event);
    }
  });

  scrollTopBtn.addEventListener('click', scrollToId);
};

toggleMenu();