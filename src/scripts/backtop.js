// src/scripts/backtop.js
// Show/hide "back to top" button; smooth scroll to top on click

const btn = document.getElementById('back-to-top');

if (btn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
