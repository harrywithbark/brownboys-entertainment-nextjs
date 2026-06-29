import { gsap, ScrollTrigger, prefersReducedMotion } from '../gsap-init.js';

const initSectionAnimations = () => {
  if (prefersReducedMotion) return;

  animateTrustCards();
  animateProcessSteps();
  animatePackageCards();
  animateAboutSection();
  animateReviewCards();
  animateContactSection();
};

const animateTrustCards = () => {
  const trustSection = document.querySelector('.trust');
  if (!trustSection) return;

  const cards = trustSection.querySelectorAll('.trust-card');
  const sectionLabel = trustSection.querySelector('.section-label');
  const sectionTitle = trustSection.querySelector('.section-title');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trustSection,
      start: 'top 80%'
    }
  });

  tl.from([sectionLabel, sectionTitle], {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15
  })
  .from(cards, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1
  }, '-=0.3');
};

const animateProcessSteps = () => {
  const processSection = document.querySelector('.process');
  if (!processSection) return;

  const steps = processSection.querySelectorAll('.process-step');
  const sectionLabel = processSection.querySelector('.section-label');
  const sectionTitle = processSection.querySelector('.section-title');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: processSection,
      start: 'top 80%'
    }
  });

  tl.from([sectionLabel, sectionTitle], {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15
  })
  .from(steps, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.15
  }, '-=0.3');
};

const animatePackageCards = () => {
  const packagesSection = document.querySelector('.packages');
  if (!packagesSection) return;

  const cards = packagesSection.querySelectorAll('.package-card');
  const sectionLabel = packagesSection.querySelector('.section-label');
  const sectionTitle = packagesSection.querySelector('.section-title');
  const sectionSubtitle = packagesSection.querySelector('.section-subtitle');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: packagesSection,
      start: 'top 80%'
    }
  });

  tl.from([sectionLabel, sectionTitle, sectionSubtitle], {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1
  })
  .from(cards, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.12
  }, '-=0.3');
};

const animateAboutSection = () => {
  const aboutSection = document.querySelector('.about');
  if (!aboutSection) return;

  const content = aboutSection.querySelector('.about-content');
  const paragraphs = content?.querySelectorAll('p');
  const quoteBlock = content?.querySelector('.quote-block');
  const circles = aboutSection.querySelectorAll('.about-circle');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: 'top 80%'
    }
  });

  if (paragraphs) {
    tl.from(paragraphs, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15
    });
  }

  if (quoteBlock) {
    tl.from(quoteBlock, {
      opacity: 0,
      x: -30,
      duration: 0.7
    }, '-=0.3');
  }

  if (circles.length > 0) {
    tl.from(circles, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.2
    }, '-=0.5');
  }
};

const animateReviewCards = () => {
  const reviewsSection = document.querySelector('.reviews');
  if (!reviewsSection) return;

  const header = reviewsSection.querySelector('.reviews-header');
  const cards = reviewsSection.querySelectorAll('.review-card');
  const stars = reviewsSection.querySelectorAll('.review-star');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: reviewsSection,
      start: 'top 80%'
    }
  });

  if (header) {
    tl.from(header.children, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1
    });

    if (stars.length > 0) {
      tl.from(stars, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        stagger: 0.05
      }, '-=0.3');
    }
  }

  if (cards.length > 0) {
    tl.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.12
    }, '-=0.3');
  }
};

const animateContactSection = () => {
  const contactSection = document.querySelector('.contact');
  if (!contactSection) return;

  const items = contactSection.querySelectorAll('.contact-item');
  const decoration = contactSection.querySelector('.contact-decoration');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSection,
      start: 'top 80%'
    }
  });

  if (items.length > 0) {
    tl.from(items, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.1
    });
  }

  if (decoration) {
    tl.from(decoration, {
      opacity: 0,
      duration: 0.8
    }, '-=0.4');
  }
};

export { initSectionAnimations };
