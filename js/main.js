document.addEventListener('DOMContentLoaded', () => {

  // ── i18n ─────────────────────────────────────────────────────────────────
  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang]?.[key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    if (translations[lang].page_title)  document.title = translations[lang].page_title;
    if (translations[lang].articles_page_title && document.body.classList.contains('articles-page')) {
      document.title = translations[lang].articles_page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const key = document.body.classList.contains('articles-page') ? 'articles_meta_desc' : 'meta_desc';
      if (translations[lang][key]) metaDesc.content = translations[lang][key];
    }

    localStorage.setItem('lang', lang);

    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function initLanguage() {
    const saved = localStorage.getItem('lang') || 'en';
    applyLanguage(saved);
  }

  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  initLanguage();

  // ── AOS ──────────────────────────────────────────────────────────────────
  AOS.init({
    duration: 500,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });

  // ── STICKY NAV ───────────────────────────────────────────────────────────
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── MOBILE MENU ──────────────────────────────────────────────────────────
  const toggle     = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenu.classList.add('is-open');
    toggle.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.classList.remove('is-open');
    toggle.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  // Close on any mobile menu link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // ── ACTIVE NAV HIGHLIGHTING ──────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // ── COUNTER ANIMATION ────────────────────────────────────────────────────
  const counters = document.querySelectorAll('.stat-number[data-target]');

  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    function animateCounter(el) {
      const target   = parseInt(el.dataset.target, 10);
      const duration = 1400;
      const start    = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }

    counters.forEach(c => counterObserver.observe(c));
  }

});
