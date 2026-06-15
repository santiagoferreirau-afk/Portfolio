/* Santiago Ferreira — Portfolio
   Minimal JS: mobile nav + scroll reveal */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

  /* ---------- Scroll reveal ---------- */
  const targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));
});
