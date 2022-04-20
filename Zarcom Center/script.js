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

//COPYRIGHT UPDATES//

const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

//SMOOTH SCROLL//

const siteLinks = document.querySelectorAll(`a:link`);

siteLinks.forEach(function (link) {
  link.addEventListener(`click`, function (e) {
    e.preventDefault();
    const href = link.getAttribute(`href`);
    if (href === `#`)
      window.scrollTo({
        top: 0,
        behavior: `smooth`,
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
