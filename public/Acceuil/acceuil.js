const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const menu = document.querySelectorAll('.bulle');
window.addEventListener('load', () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    titreSpans,
    1,
    { top: -500, opacity: 0, ease: 'power2.out' },
    0.3
  )
    .staggerFrom(btns, 1, { opacity: 0, ease: 'power2.out' }, 0.3, '-=1')
    .from(l1, 1, { width: 0, ease: 'power2.out' }, '-=2')
    .from(l2, 1, { width: 0, ease: 'power2.out' }, '-=2')
    .staggerFrom(menu, 1, { right: -200, ease: 'power2.out' }, 0.3, '-=1');

  TL.play();
});
