var swiper1 = new Swiper(".swiper1", {
  effect: "coverflow",
  realIndex: "3",
  grabCursor: "true",
  centeredSlide: "true",
  activeIndex: "3",
  //loop: "true",
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

var swiper2 = new Swiper(".swiper2", {
  grabCursor: "true",
  spaceBetween: 30,
  centeredSlide: "true",
  //loop: "true",
  slidesPerView: 1,
  //   autoplay: {
  //     delay: 2000,
  //     reverseDirection: true,
  //   },

  //   mousewheel: true,
  keyboard: true,
  breakpoints: {
    1060: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    960: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});
var swiper3 = new Swiper(".swiper3", {
  effect: "coverflow",
  grabCursor: "true",
  centeredSlide: "true",
  //loop: "true",
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  breakpoints: {
    960: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});
