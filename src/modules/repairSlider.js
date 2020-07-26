'use strict';

import domElems from './DOMElements';

class RepairSlider {
  constructor(slider) {
    this.position = null;
    this.mobileWindowWidth = slider.sliderWindow.clientWidth;
    this.mobileTrackWidth = null;
    this.mobileTrack = slider.sliderTrack;
    this.mobileCounter = 0;
    this.currentType = 1;
    this.currentSlide = 0;
    this.nav = slider.nav;
    this.counter = slider.sliderCounter;
    this.typeRepairSlider = slider.repairSliderItems;
    this.slides = [...document.querySelectorAll(`
    .types-repair${this.currentType} > .repair-types-slider__slide`)];
  }

  showCounter() {
    this.counter.current.textContent = this.currentSlide + 1;
    this.counter.total.textContent = this.slides.length;
  }

  toggleActiveBtn(target) {
    this.nav.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    this.currentType = this.nav.indexOf(target) + 1;
    target.classList.add('active');

    this.slides = [...document.querySelectorAll(`
    .types-repair${this.currentType} > .repair-types-slider__slide`)];

    this.showCounter();

    //Toggle Slider Type
    this.toggler(this.typeRepairSlider, 'types-repair', this.currentType);
  }

  toggler(parent, itemClass, counter) {
    parent.forEach(item => {
      item.style.display = 'none';
      item.style.zIndex = 1;

      if (item.classList.contains(`${itemClass}${counter}`)) {
        item.style.display = 'block';
        item.style.zIndex = 5;
      }
    });
  }

  slidesShow(col) {
    col.forEach(currentItem => {
      currentItem.style.display = 'none';
      currentItem.style.zIndex = 1;

      if (col.indexOf(currentItem) === this.currentSlide) {
        currentItem.style.display = 'block';
        currentItem.style.zIndex = 5;
      }
    });

    this.showCounter();
  }

  nextSlide() {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0;
      this.slidesShow(this.slides);
    } else {
      this.currentSlide++;
      this.slidesShow(this.slides);
    }
  }

  prevSlide() {
    if (this.currentSlide <= 0) {
      this.currentSlide = this.slides.length - 1;
      this.slidesShow(this.slides);
    } else {
      this.currentSlide--;
      this.slidesShow(this.slides);
    }
  }

  getMobileNavSettings() {
    this.mobileTrackWidth = 0;

    this.nav.forEach(item => {
      this.mobileTrackWidth += item.clientWidth;
    });
  }

  mobileNext() {
    this.getMobileNavSettings();

    if (this.mobileCounter < this.nav.length) {
      this.position += this.nav[this.mobileCounter].clientWidth;
      this.mobileTrack.style.transform = `translateX(-${this.position}px)`;
      this.mobileCounter++;
    }
  }

  mobilePrev() {
    this.getMobileNavSettings();

    if (this.mobileCounter > 0) {
      this.position -= this.nav[this.mobileCounter - 1].clientWidth;
      this.mobileTrack.style.transform = `translateX(-${this.position}px)`;
      this.mobileCounter--;
    }
  }
}

const repairSlider = new RepairSlider(domElems.repairSlider);
repairSlider.showCounter();

export default repairSlider;