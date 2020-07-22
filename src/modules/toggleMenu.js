'use strict';

const menuIcon = document.querySelector('.menu__icon'),
    menuPopup = document.querySelector('.popup.popup-menu'),
    menuDialog = menuPopup.querySelector('.popup-dialog-menu');

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

const menu = new Menu(menuPopup, menuDialog, menuIcon);

export default menu;