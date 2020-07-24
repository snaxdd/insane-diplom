'use strict';

const openPopup = (popup) => {
  popup.style.visibility = 'visible';

  const close = event => {
    const target = event.target;

    if ([...target.classList].includes('close')) {
      popup.style.visibility = 'hidden';
      popup.removeEventListener('click', close);
    }
  };

  popup.addEventListener('click', close);
};

export default openPopup;