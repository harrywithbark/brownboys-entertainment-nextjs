import { initNavbar, initMobileMenu, initSmoothScroll, initNavAnimations } from './modules/navbar.js';
import { initHero, addHeroLineStyles } from './modules/hero.js';
import { initFaq, initServicesAccordion } from './modules/accordion.js';
import { initReviewCounter } from './modules/counters.js';
import { initGallery } from './modules/gallery.js';
import { initSectionAnimations } from './modules/scroll-animations.js';
import { gsap } from './gsap-init.js';

const initContactForm = () => {
  const form = document.getElementById('booking-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    form.style.display = 'none';
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
};

const init = () => {
  addHeroLineStyles();

  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initNavAnimations();

  initHero();

  initFaq();
  initServicesAccordion();

  initReviewCounter();

  initGallery();

  initSectionAnimations();

  initContactForm();

  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
