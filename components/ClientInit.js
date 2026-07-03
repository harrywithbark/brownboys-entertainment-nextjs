'use client';

import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    let ScrollTrigger;

    const run = async () => {
      const gsapModule = await import('gsap');
      const stModule = await import('gsap/ScrollTrigger');
      const tpModule = await import('gsap/TextPlugin');

      const gsap = gsapModule.gsap || gsapModule.default;
      ScrollTrigger = stModule.ScrollTrigger || stModule.default;
      const TextPlugin = tpModule.TextPlugin || tpModule.default;

      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      gsap.defaults({ ease: 'power2.out', duration: 0.8 });
      ScrollTrigger.defaults({ once: true, start: 'top 85%', toggleActions: 'play none none none' });

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      initNavbar(gsap);
      initMobileMenu(gsap);
      initSmoothScroll();
      initNavAnimations(gsap);
      initScrollSpy();
      initHero(gsap, prefersReducedMotion);
      initFaq(gsap, prefersReducedMotion);
      initCounters(gsap, ScrollTrigger, prefersReducedMotion);
      initGallery(gsap, prefersReducedMotion);
      initReviews();
      initSectionAnimations(gsap, ScrollTrigger, prefersReducedMotion);
      initFormWizard();
      initContactForm();
      initLeadModal();

      document.querySelectorAll('main > section:not(.hero):not(.stats-strip)').forEach((section) => {
        section.classList.add('is-visible');
      });
    };

    run().catch(console.error);

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return null;
}

/* ─── Navbar ─── */
function initNavbar(gsap) {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  let ticking = false;
  const update = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();
}

function initMobileMenu(gsap) {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  const links = Array.from(document.querySelectorAll('.mobile-menu-link'));

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      gsap.fromTo(menu, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      if (links.length) {
        gsap.from(links, { opacity: 0, y: 24, scale: 0.98, duration: 0.5, stagger: 0.08, ease: 'power2.out', onComplete: () => links[0]?.focus() });
      }
    }
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight, behavior: 'smooth' });
    });
  });
}

function initNavAnimations(gsap) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const navLinks = Array.from(document.querySelectorAll('.navbar-link'));
  if (!navLinks.length) return;
  gsap.from(navLinks, { opacity: 0, y: -20, duration: 0.6, stagger: 0.1, delay: 0.5, ease: 'power2.out' });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = Array.from(document.querySelectorAll('.navbar-link'));
  if (!sections.length || !navLinks.length) return;
  const setActive = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('is-active', href === `#${id}` || href.endsWith(`#${id}`));
    });
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  sections.forEach((s) => observer.observe(s));
}

/* ─── Hero ─── */
function initHero(gsap, prefersReducedMotion) {
  const video = document.querySelector('.hero-video');
  if (video) {
    const fallback = document.querySelector('.hero-image');
    video.addEventListener('error', () => { video.setAttribute('data-failed', ''); if (fallback) fallback.style.opacity = '1'; });
    video.addEventListener('canplay', () => { if (fallback) fallback.style.opacity = '0'; }, { once: true });
  }

  const headline = document.querySelector('.hero-headline, .hero-display');
  if (!headline) return;
  const heroEyebrow = document.querySelector('.hero-eyebrow');
  const heroButtons = document.querySelector('.hero-buttons');
  const heroBadge = document.querySelector('.hero-badge');
  const heroScroll = document.querySelector('.hero-scroll');
  const heroSubheadline = document.querySelector('.hero-subheadline, .hero-headline-tagline');

  const tl = gsap.timeline({ delay: 0.3 });
  if (prefersReducedMotion) {
    gsap.set([heroEyebrow, heroSubheadline, heroButtons, heroBadge, heroScroll, headline].filter(Boolean), { opacity: 1, y: 0 });
    return;
  }
  tl.from(headline, { opacity: 0, y: 48, duration: 1, ease: 'power3.out' });
  if (heroSubheadline) tl.from(heroSubheadline, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4');
  if (heroButtons) {
    const buttons = heroButtons.querySelectorAll('.btn');
    tl.from(buttons, { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.3');
  }
  if (heroScroll) tl.from(heroScroll, { opacity: 0, duration: 0.6 }, '-=0.2');
}

/* ─── FAQ / Accordion ─── */
function initFaq(gsap, prefersReducedMotion) {
  document.querySelectorAll('.faq .accordion, .services-accordion').forEach((accordion) => {
    const items = accordion.querySelectorAll('.accordion-item');
    items.forEach((item, i) => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const body = item.querySelector('.accordion-body');
      if (!content || !body) return;

      if (i === 0) { item.classList.add('active'); if (prefersReducedMotion) { content.style.maxHeight = 'none'; } else { gsap.set(content, { maxHeight: body.offsetHeight }); } }
      else { item.classList.remove('active'); content.style.maxHeight = '0'; }

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        items.forEach((other) => {
          if (other !== item && other.classList.contains('active')) {
            other.classList.remove('active');
            const oc = other.querySelector('.accordion-content');
            if (prefersReducedMotion) { oc.style.maxHeight = '0'; } else { gsap.to(oc, { maxHeight: 0, duration: 0.3, ease: 'power2.in' }); }
          }
        });
        if (isOpen) {
          item.classList.remove('active');
          if (prefersReducedMotion) { content.style.maxHeight = '0'; } else { gsap.to(content, { maxHeight: 0, duration: 0.3, ease: 'power2.in' }); }
        } else {
          item.classList.add('active');
          if (prefersReducedMotion) { content.style.maxHeight = 'none'; } else { gsap.to(content, { maxHeight: body.offsetHeight, duration: 0.4, ease: 'power2.out' }); }
        }
      });
    });
  });
}

/* ─── Counters ─── */
function initCounters(gsap, ScrollTrigger, prefersReducedMotion) {
  const reviewNumber = document.querySelector('.reviews-number');
  if (reviewNumber) {
    const v = parseFloat(reviewNumber.textContent);
    reviewNumber.dataset.counter = v;
    reviewNumber.dataset.decimals = '1';
  }

  document.querySelectorAll('[data-counter]').forEach((counter) => {
    const target = parseFloat(counter.dataset.counter);
    const decimals = counter.dataset.decimals ? parseInt(counter.dataset.decimals) : 0;
    const suffix = counter.dataset.suffix || '';
    const run = () => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target, duration: 2, ease: 'power2.out',
        onUpdate: () => { counter.textContent = Number(obj.value).toFixed(decimals) + suffix; },
        onComplete: () => { window.dispatchEvent(new CustomEvent('counter:finished', { detail: { counter, target } })); }
      });
    };
    if (prefersReducedMotion) { counter.textContent = target.toFixed(decimals) + suffix; return; }
    const rect = counter.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) { run(); return; }
    ScrollTrigger.create({ trigger: counter, start: 'top 85%', once: true, onEnter: run });
  });
}

/* ─── Gallery ─── */
function initGallery(gsap, prefersReducedMotion) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('.gallery-lightbox-img');
    const lbCaption = lightbox.querySelector('.gallery-lightbox-caption');
    const closeBtn = lightbox.querySelector('.gallery-lightbox-close');
    const items = gallery.querySelectorAll('.gallery-item[data-gallery]');
    const openLb = (item) => {
      const img = item.querySelector('img'); if (!img) return;
      lbImg.src = img.src; lbImg.alt = img.alt;
      lbCaption.textContent = item.querySelector('.gallery-label')?.textContent || '';
      lightbox.hidden = false; document.body.style.overflow = 'hidden'; closeBtn.focus();
    };
    const closeLb = () => { lightbox.hidden = true; lbImg.src = ''; document.body.style.overflow = ''; };
    items.forEach((item) => {
      item.setAttribute('role', 'button'); item.setAttribute('tabindex', '0');
      item.addEventListener('click', () => openLb(item));
      item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(item); } });
    });
    closeBtn?.addEventListener('click', closeLb);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });
  }

  gallery.querySelectorAll('.gallery-filter').forEach((filter) => {
    filter.addEventListener('click', () => {
      const cat = filter.dataset.filter;
      gallery.querySelectorAll('.gallery-filter').forEach((b) => { b.classList.toggle('active', b === filter); b.setAttribute('aria-selected', b === filter ? 'true' : 'false'); });
      gallery.querySelectorAll('.gallery-item').forEach((item) => { item.classList.toggle('gallery-item-hidden', cat !== 'all' && item.dataset.category !== cat); });
    });
  });

  gallery.querySelectorAll('.gallery-item').forEach((cell) => {
    cell.addEventListener('mouseenter', () => gsap.to(cell, { scale: 1.02, duration: 0.3, ease: 'power2.out' }));
    cell.addEventListener('mouseleave', () => gsap.to(cell, { scale: 1, duration: 0.3, ease: 'power2.out' }));
  });

  if (!prefersReducedMotion) {
    gsap.from(gallery.querySelectorAll('.gallery-item'), { opacity: 0, y: 24, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: gallery, start: 'top 80%' } });
  }
}

/* ─── Reviews ─── */
function initReviews() {
  const url = 'https://www.google.com/maps/place/Brownboys+entertainment/@49.1789707,-122.86788,15z/data=!4m6!3m5!1s0x252f5f2e97f69b03:0x745798579f83528e!8m2!3d49.1789707!4d-122.86788!16s%2Fg%2F11vj5zy144';
  document.querySelectorAll('[data-google-reviews]').forEach((el) => { el.href = url; });
}

/* ─── Section Animations ─── */
function initSectionAnimations(gsap, ScrollTrigger, prefersReducedMotion) {
  if (prefersReducedMotion) {
    document.querySelectorAll('.feature-list-item').forEach((i) => i.classList.add('is-visible'));
    document.querySelectorAll('main > section:not(.hero):not(.stats-strip)').forEach((s) => s.classList.add('is-visible'));
    return;
  }

  initSectionIslands(prefersReducedMotion);
  initHeroParallax(gsap, ScrollTrigger);
  initSocialProof(gsap);
  animateServicesSection(gsap, prefersReducedMotion);
  animateWeddingSpecialist(gsap);
  animateGallerySection(gsap, ScrollTrigger);
  initStatsStripVisuals(gsap, ScrollTrigger, prefersReducedMotion);
  animatePackageCards(gsap);
  animateApproachSection(gsap);
  animateReviewCards(gsap);
  animateFaqSection(gsap);
  animateContactSection(gsap);
  initPageHeaderAnimation(gsap);
  initPackagePageAnimations(gsap, ScrollTrigger);

  ScrollTrigger.refresh();
  window.addEventListener('load', () => ScrollTrigger.refresh());

  window.addEventListener('counter:finished', () => {
    if (!window.__bb_sparks_last || Date.now() - window.__bb_sparks_last > 1200) {
      triggerPackageSparks(gsap);
      window.__bb_sparks_last = Date.now();
    }
  });
}

function initSectionIslands(prefersReducedMotion) {
  const sections = document.querySelectorAll('main > section:not(.hero):not(.stats-strip):not(.section-collapsed)');
  sections.forEach((s) => { if (!s.classList.contains('is-visible')) s.classList.add('is-visible'); });
  if (prefersReducedMotion) return;
  const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }); }, { threshold: 0.01, rootMargin: '0px 0px 8% 0px' });
  sections.forEach((s) => observer.observe(s));
}

function initHeroParallax(gsap, ScrollTrigger) {
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');
  if (!hero || !heroBg) return;
  gsap.to(heroBg, { yPercent: 12, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  if (heroContent) gsap.to(heroContent, { y: 30, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
}

function initSocialProof(gsap) {
  const section = document.querySelector('.stats-strip, .social-proof');
  if (!section) return;
  gsap.from(section.querySelectorAll('.stats-strip-item, .social-proof-item'), { opacity: 0, y: 24, duration: 0.55, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 90%', once: true } });
}

function revealHeader(gsap, section, extra = []) {
  const header = [section.querySelector('.section-label'), section.querySelector('.section-title'), section.querySelector('.section-subtitle'), ...extra].filter(Boolean);
  if (!header.length) return;
  gsap.from(header, { opacity: 0, y: 28, duration: 0.65, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 82%', once: true } });
}

function animateServicesSection(gsap, prefersReducedMotion) {
  const section = document.querySelector('.services-elevated, .services-premium, .services');
  if (!section) return;
  const intro = section.querySelector('.services-elevated-intro, .services-premium-intro, .section-intro');
  if (intro) gsap.from(intro.children, { opacity: 0, y: 24, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: section, start: 'top 78%', once: true } });
  const cards = section.querySelectorAll('.service-card, .service-row');
  if (cards.length && !prefersReducedMotion) gsap.from(cards, { opacity: 0, y: 40, duration: 0.65, stagger: 0.08, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: section.querySelector('.services-grid, .services-zigzag') || section, start: 'top 88%', once: true } });
}

function animateWeddingSpecialist(gsap) {
  const section = document.querySelector('.wedding-specialist');
  if (!section) return;
  const copy = section.querySelector('.wedding-specialist-copy');
  const media = section.querySelector('.wedding-specialist-media');
  const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 80%', once: true } });
  if (copy) tl.from(copy.children, { opacity: 0, x: -32, duration: 0.65, stagger: 0.1 });
  if (media) tl.from(media, { opacity: 0, x: 32, duration: 0.75 }, '-=0.4');
}

function animateGallerySection(gsap, ScrollTrigger) {
  const section = document.querySelector('.gallery');
  if (!section) return;
  revealHeader(gsap, section, section.querySelector('.gallery-filters') ? [section.querySelector('.gallery-filters')] : []);
  gsap.from(section.querySelectorAll('.gallery-item'), { opacity: 0, scale: 0.94, duration: 0.6, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: section.querySelector('.gallery-grid') || section, start: 'top 85%', once: true } });
}

function initStatsStripVisuals(gsap, ScrollTrigger, prefersReducedMotion) {
  const strip = document.querySelector('.stats-strip');
  if (!strip) return;
  const values = strip.querySelectorAll('.stats-strip-value');
  if (!values.length) return;
  if (prefersReducedMotion) { values.forEach((v) => v.classList.add('is-visible')); return; }
  const tl = gsap.timeline({ scrollTrigger: { trigger: strip, start: 'top 85%', once: true } });
  tl.from(strip, { opacity: 0, y: 18, duration: 0.6, ease: 'power2.out' })
    .to(values, { scale: 1.04, duration: 0.45, ease: 'sine.inOut', stagger: 0.12, yoyo: true, repeat: 1 }, '-=0.2');
}

function animatePackageCards(gsap) {
  const section = document.querySelector('.packages');
  if (!section) return;
  revealHeader(gsap, section);
  gsap.from(section.querySelectorAll('.package-card'), { opacity: 0, y: 50, duration: 0.7, stagger: 0.12, scrollTrigger: { trigger: section, start: 'top 80%', once: true } });
}

function animateApproachSection(gsap) {
  const section = document.querySelector('.approach, .about-premium, .about');
  if (!section) return;
  const header = section.querySelector('.approach-header, .about-premium-header, .about-content');
  const pillars = section.querySelectorAll('.pillar-card');
  const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 80%', once: true } });
  if (header) tl.from(header.children, { opacity: 0, y: 28, duration: 0.55, stagger: 0.1 });
  if (pillars.length) tl.from(pillars, { opacity: 0, y: 32, duration: 0.6, stagger: 0.1 }, '-=0.3');
}

function animateReviewCards(gsap) {
  const section = document.querySelector('.reviews');
  if (!section) return;
  const panel = section.querySelector('.reviews-google-panel');
  const grid = section.querySelector('.reviews-static-grid');
  if (panel) gsap.from(panel, { opacity: 0, x: -28, duration: 0.65, scrollTrigger: { trigger: section, start: 'top 80%', once: true } });
  if (grid) gsap.from(grid.querySelectorAll('.review-card'), { opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 80%', once: true } });
}

function animateFaqSection(gsap) {
  const section = document.querySelector('.faq');
  if (!section) return;
  const intro = section.querySelector('.faq-intro');
  if (intro) gsap.from(intro.children, { opacity: 0, y: 24, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: section, start: 'top 82%', once: true } });
  gsap.from(section.querySelectorAll('.accordion-item'), { opacity: 0, y: 20, duration: 0.5, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: section.querySelector('.faq-questions') || section, start: 'top 85%', once: true } });
}

function animateContactSection(gsap) {
  const section = document.querySelector('.contact');
  if (!section) return;
  revealHeader(gsap, section);
  const items = section.querySelectorAll('.contact-item');
  const form = section.querySelector('.contact-form');
  const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 80%', once: true } });
  if (items.length) tl.from(items, { opacity: 0, x: -24, duration: 0.55, stagger: 0.08 });
  if (form) tl.from(form, { opacity: 0, x: 24, duration: 0.65 }, '-=0.35');
}

function initPageHeaderAnimation(gsap) {
  const header = document.querySelector('.page-header-content');
  if (!header) return;
  gsap.from(header.children, { opacity: 0, y: 32, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.15 });
}

function initPackagePageAnimations(gsap, ScrollTrigger) {
  const main = document.querySelector('.package-detail-main');
  const sidebar = document.querySelector('.package-detail-sidebar');
  if (!main) return;
  gsap.from(main.children, { opacity: 0, y: 28, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: main, start: 'top 85%', once: true } });
  if (sidebar) gsap.from(sidebar, { opacity: 0, x: 24, duration: 0.7, scrollTrigger: { trigger: sidebar, start: 'top 85%', once: true } });
  document.querySelectorAll('.feature-list-item').forEach((item, i) => {
    ScrollTrigger.create({ trigger: item, start: 'top 92%', once: true, onEnter: () => { setTimeout(() => item.classList.add('is-visible'), i * 60); } });
  });
}

function triggerPackageSparks(gsap) {
  document.querySelectorAll('.package-card').forEach((card) => {
    const container = document.createElement('div');
    container.className = 'package-sparks';
    Object.assign(container.style, { position: 'absolute', inset: '0', pointerEvents: 'none' });
    card.style.position = card.style.position || 'relative';
    card.appendChild(container);
    for (let i = 0; i < 10; i++) {
      const s = document.createElement('span');
      s.className = 'spark';
      Object.assign(s.style, { position: 'absolute', left: Math.random() * 100 + '%', top: (Math.random() * 80 + 10) + '%', width: '6px', height: '6px', background: i % 2 ? 'var(--red-neon)' : 'var(--gold)', borderRadius: '50%', opacity: '0' });
      container.appendChild(s);
      gsap.fromTo(s, { opacity: 0, scale: 0.4, y: 0 }, { opacity: 1, scale: 1.2, y: -40 - Math.random() * 30, duration: 0.8 + Math.random() * 0.6, delay: Math.random() * 0.3, ease: 'power2.out', onComplete: () => { gsap.to(s, { opacity: 0, duration: 0.4, delay: 0.1, onComplete: () => s.remove() }); } });
    }
    setTimeout(() => container.remove(), 2200);
  });
}

/* ─── Form Wizard ─── */
function initFormWizard() {
  const form = document.getElementById('booking-form');
  if (!form) return;
  const steps = form.querySelectorAll('.form-step');
  const progressFill = document.getElementById('progressFill');
  const progressSteps = form.querySelectorAll('.form-progress-step');
  let currentStep = 1;
  const totalSteps = 3;

  const updateProgress = (step) => {
    progressFill.style.width = `${(step / totalSteps) * 100}%`;
    progressSteps.forEach((el, i) => el.classList.toggle('active', i + 1 <= step));
  };
  const showStep = (n) => {
    steps.forEach((s) => { s.classList.toggle('active', parseInt(s.dataset.step) === n); });
    updateProgress(n); currentStep = n;
  };
  form.querySelectorAll('.form-next-btn').forEach((b) => b.addEventListener('click', () => { if (currentStep < totalSteps) showStep(currentStep + 1); }));
  form.querySelectorAll('.form-prev-btn').forEach((b) => b.addEventListener('click', () => { if (currentStep > 1) showStep(currentStep - 1); }));
}

/* ─── Contact Form ─── */
function initContactForm() {
  const form = document.getElementById('booking-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Hi BrownBoys Entertainment! I'd like to request a quote.", '',
      `Event type: ${data.get('event_type') || 'Not specified'}`,
      `Date: ${data.get('event_date') || 'Not specified'}`,
      `Guests: ${data.get('guest_count') || 'Not specified'}`,
      `Name: ${data.get('name') || 'Not specified'}`,
      `Email: ${data.get('email') || 'Not specified'}`,
      `Phone: ${data.get('phone') || 'Not specified'}`,
      `Venue: ${data.get('venue') || 'Not specified'}`,
      `Package: ${data.get('package_interest') || 'Not specified'}`, '',
      `Details: ${data.get('message') || ''}`,
    ];
    window.open(`https://wa.me/12505520634?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
    form.style.display = 'none'; success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ─── Lead Modal ─── */
function initLeadModal() {
  const modal = document.getElementById('lead-modal');
  if (!modal) return;
  const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); };
  const open = () => { modal.classList.add('open'); modal.removeAttribute('aria-hidden'); const f = modal.querySelector('input, textarea, select, button'); if (f) f.focus(); };

  document.querySelectorAll('.open-quote-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pi = modal.querySelector('input[name="package_interest"]');
      if (pi) pi.value = btn.dataset.package || '';
      open();
    });
  });
  modal.querySelectorAll('.lead-modal-close, .lead-modal-cancel').forEach((el) => el.addEventListener('click', close));
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });

  const form = modal.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Hi BrownBoys Entertainment! I'd like a custom quote.", '',
      `Package: ${data.get('package_interest') || 'Not specified'}`,
      `Event type: ${data.get('event_type') || 'Not specified'}`,
      `Name: ${data.get('name') || 'Not specified'}`,
      `Phone: ${data.get('phone') || 'Not specified'}`, '',
      data.get('message') || '',
    ];
    window.open(`https://wa.me/12505520634?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
    close();
  });
}
