'use strict';

import domElems from './DOMElements';

class RepairModal {
  constructor({
    showLinks,
    popup,
    closeBtn
  }) {
    this.showLinks = showLinks;
    this.popup = popup;
    this.closeBtn = closeBtn;
  }

  show() {
    this.popup.style.visibility = 'visible';
  }

  hide() {
    this.popup.style.visibility = 'hidden';
  }
}

const repairModal = new RepairModal(domElems.repairModal);

export default repairModal;