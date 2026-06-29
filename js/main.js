import { initNavbar, initMobileMenu, initSmoothScroll, initNavAnimations } from './modules/navbar.js';
import { initHero, addHeroLineStyles } from './modules/hero.js';
import { initFaq, initServicesAccordion } from './modules/accordion.js';
import { initReviewCounter } from './modules/counters.js';
import { initGallery } from './modules/gallery.js';
import { initSectionAnimations } from './modules/scroll-animations.js';
import { gsap } from './gsap-init.js';

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

  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
