import { gsap } from 'https://cdn.skypack.dev/gsap@3.12.5';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.5/ScrollTrigger';
import { TextPlugin } from 'https://cdn.skypack.dev/gsap@3.12.5/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.defaults({
  ease: 'power2.out',
  duration: 0.8
});

ScrollTrigger.defaults({
  once: true,
  start: 'top 85%',
  toggleActions: 'play none none none'
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeInUp = (element, delay = 0) => {
  if (prefersReducedMotion) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }
  gsap.from(element, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay,
    ease: 'power2.out'
  });
};

const staggerFadeIn = (elements, staggerDelay = 0.1) => {
  if (prefersReducedMotion) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: staggerDelay,
    ease: 'power2.out'
  });
};

const createScrollTrigger = (element, vars = {}) => {
  if (prefersReducedMotion) {
    gsap.set(element, { opacity: 1, ...(vars.endProps || {}) });
    return;
  }
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      ...ScrollTrigger.defaults(),
      ...vars.scrollTrigger
    },
    ...(vars.from || { opacity: 0, y: 40 }),
    ...(vars.animate || {})
  });
};

export { gsap, ScrollTrigger, TextPlugin, prefersReducedMotion, fadeInUp, staggerFadeIn, createScrollTrigger };
