'use strict';

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
const form = document.querySelector('.form');
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
