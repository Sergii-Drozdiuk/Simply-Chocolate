var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.6,
      spaceBetween: 18,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
