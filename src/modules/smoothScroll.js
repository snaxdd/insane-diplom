'use strict';

const smoothScroll = () => {
  const menu = document.querySelector('.popup-menu-main>.popup-menu-nav'),
    scrollTopBtn = document.querySelector('.button-footer');

  const scrollToId = event => {
    event.preventDefault();
    let target = event.target,
      blockId = null;

    if (target.className === 'menu-link') {
      blockId = target.getAttribute('href').substr(1);

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth'
      });
    } else if (target.closest('.button-footer')) {
      target = target.closest('.button-footer');
      
      blockId = target.firstChild.getAttribute('href').substr(1);

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  scrollTopBtn.addEventListener('click', scrollToId);
  menu.addEventListener('click', scrollToId);
};

smoothScroll();