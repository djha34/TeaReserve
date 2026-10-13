// src/scripts/reveal.js
// IntersectionObserver scroll-reveal for .reveal, .reveal-left, .reveal-right elements

const SELECTORS = ['.reveal', '.reveal-left', '.reveal-right'];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

document.querySelectorAll(SELECTORS.join(', ')).forEach(el => {
  observer.observe(el);
});
