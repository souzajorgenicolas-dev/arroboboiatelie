const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.about-visual, .about-copy, .gallery-card, .section-heading, .value-grid article, .insta-copy, .insta-mosaic, .contact-inner').forEach((element, index) => {
  element.classList.add('reveal');
  if (element.classList.contains('gallery-card') || element.closest('.value-grid')) {
    element.style.transitionDelay = `${(index % 4) * 75}ms`;
  }
  observer.observe(element);
});
