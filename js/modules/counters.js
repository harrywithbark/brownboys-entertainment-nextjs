import { gsap, ScrollTrigger, prefersReducedMotion } from '../gsap-init.js';

const initCounters = () => {
  const counters = document.querySelectorAll('[data-counter]');

  counters.forEach(counter => {
    const target = parseFloat(counter.dataset.counter);
    const decimals = counter.dataset.decimals ? parseInt(counter.dataset.decimals) : 0;
    const suffix = counter.dataset.suffix || '';

    if (prefersReducedMotion) {
      counter.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = obj.value.toFixed(decimals) + suffix;
          }
        });
      }
    });
  });
};

const initReviewCounter = () => {
  const reviewNumber = document.querySelector('.reviews-number');

  if (!reviewNumber) return;

  const targetValue = parseFloat(reviewNumber.textContent);
  reviewNumber.dataset.counter = targetValue;
  reviewNumber.dataset.decimals = 1;

  initCounters();
};

export { initCounters, initReviewCounter };
