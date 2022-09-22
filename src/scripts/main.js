/* eslint-disable max-len */
'use strict';

function stopDefault(e) {
  e.preventDefault();
}

const form = document.querySelector('.form');

form.addEventListener('submit', function() {
  stopDefault();
});

const title = document.querySelector('.intro__title');
const introText = document.querySelector('.intro__text');
const expertiseTitle = document.querySelector('.expertise__title');
const expertiseArticle = document.querySelectorAll('.expertise__article');
const serviceTitle = document.querySelector('.services__title');
const servicesPromo = document.querySelector('.services__promo');
const servicesCards = document.querySelectorAll('.services__card');
const testimonialsTitle = document.querySelector('.testimonials__title');
const testimonialsIntro = document.querySelector('.testimonials__intro');
const testimonialsCards = document.querySelectorAll('.testimonials__card');
const promoTitle = document.querySelector('.promo__title');
const promoText = document.querySelector('.promo__text');
const address = document.querySelector('.address-wrapper');
const footerNav = document.querySelector('.footer-nav');

const animateElement = (element, animationClass) => {
  const elementBoundries = element.getBoundingClientRect();

  if (elementBoundries.top >= 0
      && elementBoundries.bottom <= window.innerHeight) {
    element.classList.add(animationClass);
  }
};

window.addEventListener('scroll', () => {
  animateElement(title, 'intro__title--active');
  animateElement(introText, 'intro__text--active');
  animateElement(expertiseTitle, 'expertise__title--active');
  animateElement(serviceTitle, 'services__title--active');
  animateElement(servicesPromo, 'services__promo--active');
  animateElement(testimonialsTitle, 'testimonials__title--active');
  animateElement(testimonialsIntro, 'testimonials__intro--active');
  animateElement(promoTitle, 'promo__title--active');
  animateElement(promoText, 'promo__text--active');
  animateElement(form, 'form--active');
  animateElement(address, 'address-wrapper--active');
  animateElement(footerNav, 'footer-nav--active');

  for (const article of expertiseArticle) {
    animateElement(article, 'expertise__article--active');
  }

  for (const serviceCard of servicesCards) {
    animateElement(serviceCard, 'services__card--active');
  }

  for (const testimonialsCard of testimonialsCards) {
    animateElement(testimonialsCard, 'testimonials__card--active');
  }
});

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

  const widthOfSmallestSlide = Math.min(...[...slides].map(slide => slide.clientWidth));

  carousel.style.width = `${widthOfSmallestSlide}px`;
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

  if (window.innerWidth <= 640) {
    carousel.style.width = `${window.innerWidth}px`;
  } else {
    const widthOfSmallestSlide = Math.min(...[...slides].map(slide => slide.clientWidth));

    carousel.style.width = `${widthOfSmallestSlide}px`;
  }
});
