'use strict';

import domElems from './DOMElements';

class Menu {
  constructor(menuPopup, menuDialog, menuIcon) {
    this.resolution = window.innerWidth;
    this.menuPopup = menuPopup;
    this.menuDialog = menuDialog;
    this.menuIcon = menuIcon;
  }

  show() {
    this.menuPopup.style.visibility = 'visible';
    
    if (this.resolution > 576) {
      this.menuDialog.style.transform = 'translate3d(0, 0, 0)';
    } else {
      this.menuDialog.style.transform = 'translate3d(0, 0, 0)';
    }
  }

  hide() {
    this.menuPopup.style.visibility = 'hidden';
    
    if (this.resolution > 576) {
      this.menuDialog.style.transform = 'translate3d(100%, 0, 0)';
    } else {
      this.menuDialog.style.transform = 'translate3d(0, -100%, 0)';
    }
  }
}

const menu = new Menu(domElems.menu.popup, domElems.menu.dialog, domElems.menu.icon);

export default menu;