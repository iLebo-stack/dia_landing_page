/* eslint-disable max-len */
'use strict';

const carousel = document.querySelector('.header__slider');
const headerControls = document.querySelector('.header__controls');
const headerContent = document.querySelector('.header__content');
const slides = document.querySelectorAll('.header__image-slider');
const previousButton = document.querySelector('.header__slider-button-prev');
const nextButton = document.querySelector('.header__slider-button-next');

window.addEventListener('DOMContentLoaded', () => {
  adjustSliderPosition();

  slides.forEach(slide => {
    slide.style.transform = 'translateX(0)';
  });

  setSlideFrameWidth();
});

nextButton.addEventListener('click', () => {
  const activeImage = [...slides].find(slide => (
    slide.classList.contains('header__image-slider--is-active')
  ));
  const indexOfActiveImage = [...slides].findIndex(slide => (
    slide.classList.contains('header__image-slider--is-active')
  ));
  const xPositionOfActiveImage = activeImage.style.transform.match(/\d+/);

  if (indexOfActiveImage < slides.length - 1) {
    slides.forEach(slide => {
      slide.style.transform = `translateX(${(Math.abs(xPositionOfActiveImage) + activeImage.clientWidth) * -1}px)`;
    });
  }

  slides[indexOfActiveImage + 1].classList.add('header__image-slider--is-active');
  activeImage.classList.remove('header__image-slider--is-active');
});

previousButton.addEventListener('click', () => {
  const activeImage = [...slides].find(slide => (
    slide.classList.contains('header__image-slider--is-active')
  ));
  const indexOfActiveImage = [...slides].findIndex(slide => (
    slide.classList.contains('header__image-slider--is-active')
  ));
  const xPositionOfActiveImage = activeImage.style.transform.match(/\d+/);

  if (indexOfActiveImage > 0) {
    slides.forEach(slide => {
      slide.style.transform = `translateX(${(Math.abs(xPositionOfActiveImage) - slides[indexOfActiveImage - 1].clientWidth) * -1}px)`;
    });
  }

  slides[indexOfActiveImage - 1].classList.add('header__image-slider--is-active');
  activeImage.classList.remove('header__image-slider--is-active');
});

function setSlideFrameWidth() {
  if (window.innerWidth <= 640) {
    carousel.style.width = `${window.innerWidth}px`;
  } else {
    const widthOfSmallestSlide = Math.min(...[...slides].map(slide => slide.clientWidth));

    carousel.style.width = `${widthOfSmallestSlide}px`;
  }
}

function adjustSliderPosition() {
  const leftSpace = (window.innerWidth - headerControls.clientWidth) / 2;
  const headerContentWidth = headerContent.clientWidth;

  if (window.innerWidth <= 640) {
    carousel.style.left = '0px';
  }

  if (window.innerWidth <= 2114 && window.innerWidth > 640) {
    carousel.style.left = leftSpace + headerContentWidth + 106 + 'px';
  }

  if (window.innerWidth > 2114) {
    carousel.style.left = 'initial';
    carousel.style.right = '0px';
  }
}

window.addEventListener('resize', () => {
  adjustSliderPosition();

  setSlideFrameWidth();

  slides.forEach((slide, key) => {
    slide.style.transform = 'translateX(0)';

    if (key === 0) {
      slide.classList.add('header__image-slider--is-active');
    } else {
      slide.classList.remove('header__image-slider--is-active');
    }
  });
});
