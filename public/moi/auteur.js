const titreSpans = document.querySelectorAll('h1 span');
const pic = document.querySelectorAll('.main-pic');
const intro = document.querySelectorAll('.intro');
const content = document.querySelectorAll('.content');
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
function toggleMenu() {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });
}
toggleMenu();
window.addEventListener('load', () => {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(
    titreSpans,
    1,
    { top: -500, opacity: 0, ease: 'power2.out' },
    0.3
  )
    .staggerFrom(pic, 2, { left: -1200, ease: 'power2.out' }, 0.3, '-=1')
    .staggerFrom(intro, 2, { right: -1200, ease: 'power2.out' }, 0.3, '-=1');

  TL.play();
});
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
content.forEach((section) => observer.observe(section));
