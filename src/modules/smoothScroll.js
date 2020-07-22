'use strict';

const smoothScroll = target => {
    const elementId = target.getAttribute('href').substr(1);

    document.getElementById(elementId).scrollIntoView({
      behavior: 'smooth'
    });
};

export default smoothScroll;