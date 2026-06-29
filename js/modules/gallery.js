import { gsap, prefersReducedMotion } from '../gsap-init.js';

const initGallery = () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const cells = gallery.querySelectorAll('.gallery-cell');

  cells.forEach((cell, index) => {
    cell.addEventListener('mouseenter', () => {
      gsap.to(cell, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    cell.addEventListener('mouseleave', () => {
      gsap.to(cell, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  if (!prefersReducedMotion) {
    gsap.from(cells, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      stagger: {
        amount: 0.8,
        grid: [3, 4],
        from: 'start'
      },
      scrollTrigger: {
        trigger: gallery,
        start: 'top 80%'
      }
    });
  }
};

export { initGallery };
