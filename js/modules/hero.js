import { gsap, prefersReducedMotion } from '../gsap-init.js';

const heroHeadline = document.querySelector('.hero-headline');
const heroEyebrow = document.querySelector('.hero-eyebrow');
const heroSubheadline = document.querySelector('.hero-subheadline');
const heroServices = document.querySelector('.hero-services');
const heroButtons = document.querySelector('.hero-buttons');
const heroBadge = document.querySelector('.hero-badge');
const heroScroll = document.querySelector('.hero-scroll');

const splitTextToLines = (element) => {
  if (!element) return [];
  const text = element.textContent.trim();
  const words = text.split(' ');
  const midPoint = Math.ceil(words.length / 2);

  const line1 = words.slice(0, midPoint).join(' ');
  const line2 = words.slice(midPoint).join(' ');

  element.innerHTML = `
    <span class="hero-line hero-line-1">${line1}</span>
    <br>
    <span class="hero-line hero-line-2">${line2}</span>
  `;

  return element.querySelectorAll('.hero-line');
};

const initHero = () => {
  if (!heroHeadline) return;

  const lines = splitTextToLines(heroHeadline);

  const tl = gsap.timeline({ delay: 0.3 });

  if (prefersReducedMotion) {
    gsap.set([lines, heroEyebrow, heroSubheadline, heroServices, heroButtons, heroBadge, heroScroll], { opacity: 1, y: 0 });
    return;
  }

  if (lines.length > 0) {
    tl.from(lines, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }

  if (heroEyebrow) {
    tl.from(heroEyebrow, {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.6');
  }

  if (heroSubheadline) {
    tl.from(heroSubheadline, {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, '-=0.4');
  }

  if (heroServices) {
    const serviceItems = heroServices.querySelectorAll('.hero-service, .hero-dot');
    tl.from(serviceItems, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08
    }, '-=0.4');
  }

  if (heroButtons) {
    const buttons = heroButtons.querySelectorAll('.btn');
    tl.from(buttons, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1
    }, '-=0.3');
  }

  if (heroBadge) {
    tl.from(heroBadge, {
      opacity: 0,
      y: 20,
      duration: 0.5
    }, '-=0.2');
  }

  if (heroScroll) {
    tl.from(heroScroll, {
      opacity: 0,
      duration: 0.6
    }, '-=0.2');
  }
};

const addHeroLineStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .hero-line {
      display: inline-block;
    }
  `;
  document.head.appendChild(style);
};

export { initHero, addHeroLineStyles };
