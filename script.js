var swiper1 = new Swiper(".swiper1", {
  effect: "coverflow",
  realIndex: "3",
  // grabCursor: "true",
  centeredSlide: "true",
  activeIndex: "3",
  loop: "true",
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    delay: 1500,
    reverseDirection: true,
    disableOnInteraction: false,
    stopOnLast: true,
  },
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
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1.1,
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
  // loop: "true",
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

let btnOpen = document.querySelector(".btnOpen");
let popup = document.querySelector(".popup");
let btnClose = document.querySelector(".btnClose");
let close = document.querySelector(".close");
let btnSubmit = document.querySelector(".btnSubmit");
let popup1 = document.querySelector(".popup1");
let popup2 = document.querySelector(".popup2");
let popup3 = document.querySelector(".popup3");
let btnOpen1 = document.querySelector(".btnOpen1");
let btnClose1 = document.querySelector(".btnClose1");
let close1 = document.querySelector(".close1");
let btnSubmit1 = document.querySelector(".btnSubmit1");

btnOpen.addEventListener("click", () => {
  btnOpen.style.display = "none";
  popup.style.display = "block";
});
btnClose.addEventListener("click", () => {
  btnOpen.style.display = "block";
  popup.style.display = "none";
  popup1.style.display = "none";
});
close.addEventListener("click", () => {
  btnOpen.style.display = "block";
  popup.style.display = "none";
  popup1.style.display = "none";
});
btnSubmit.addEventListener("click", () => {
  btnOpen.style.display = "none";
  popup.style.display = "none";
  popup1.style.display = "block";
});

btnOpen1.addEventListener("click", () => {
  btnOpen1.style.display = "none";
  popup2.style.display = "block";
});
btnClose1.addEventListener("click", () => {
  btnOpen1.style.display = "block";
  popup2.style.display = "none";
  popup3.style.display = "none";
});
close1.addEventListener("click", () => {
  btnOpen1.style.display = "block";
  popup2.style.display = "none";
  popup3.style.display = "none";
});
btnSubmit1.addEventListener("click", () => {
  btnOpen1.style.display = "none";
  popup2.style.display = "none";
  popup3.style.display = "block";
});
