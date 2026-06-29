import { gsap } from '../gsap-init.js';

const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu-link');
const navLinks = document.querySelectorAll('.navbar-link');

const initNavbar = () => {
  let lastScrollY = 0;
  let ticking = false;

  const updateNavbar = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  updateNavbar();
};

const initMobileMenu = () => {
  if (!mobileToggle || !mobileMenu) return;

  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      animateMobileMenuOpen();
    } else {
      document.body.style.overflow = '';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
};

const animateMobileMenuOpen = () => {
  gsap.from(mobileLinks, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  });
};

const initSmoothScroll = () => {
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = navbar.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
};

const initNavAnimations = () => {
  gsap.from(navLinks, {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: 'power2.out'
  });
};

export { initNavbar, initMobileMenu, initSmoothScroll, initNavAnimations };
