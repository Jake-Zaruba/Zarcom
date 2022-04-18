//CAROUSEL//

const buttons = document.querySelectorAll(`[data-carousel-button]`);

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const offset = button.dataset.carouselButton === `next` ? 1 : -1;
    const slides = button
      .closest(`[data-carousel]`)
      .querySelector(`[data-slides]`);

    const activeSlide = slides.querySelector(`[data-active]`);
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//FADE IN EFFECT//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(`.animated`)[0].classList.add(`fade-in-left`);
      document.querySelectorAll(`.animated`)[1].classList.add(`fade-in-bottom`);
      document.querySelectorAll(`.animated`)[2].classList.add(`fade-in-right`);
    }
  });
});

observer.observe(document.querySelector(`.custom-builds-images`));
