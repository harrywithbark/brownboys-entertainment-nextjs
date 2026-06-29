import { gsap, prefersReducedMotion } from '../gsap-init.js';

const initAccordion = (selector = '.accordion') => {
  const accordions = document.querySelectorAll(selector);

  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach((item, index) => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const body = item.querySelector('.accordion-body');

      if (!content || !body) return;

      if (index === 0) {
        openAccordionItem(item, content, body);
      } else {
        closeAccordionItem(item, content);
      }

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        items.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            const otherContent = otherItem.querySelector('.accordion-content');
            closeAccordionItem(otherItem, otherContent);
          }
        });

        if (isOpen) {
          closeAccordionItem(item, content);
        } else {
          openAccordionItem(item, content, body);
        }
      });
    });
  });
};

const openAccordionItem = (item, content, body) => {
  item.classList.add('active');

  if (prefersReducedMotion) {
    content.style.maxHeight = 'none';
    return;
  }

  const contentHeight = body.offsetHeight;
  gsap.to(content, {
    maxHeight: contentHeight,
    duration: 0.4,
    ease: 'power2.out'
  });
};

const closeAccordionItem = (item, content) => {
  item.classList.remove('active');

  if (prefersReducedMotion) {
    content.style.maxHeight = '0';
    return;
  }

  gsap.to(content, {
    maxHeight: 0,
    duration: 0.3,
    ease: 'power2.in'
  });
};

const initFaq = () => {
  initAccordion('.faq .accordion');
};

const initServicesAccordion = () => {
  initAccordion('.services-accordion');
};

export { initAccordion, initFaq, initServicesAccordion };
