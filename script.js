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
    stopOnLast: false,
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
  loop: "true",
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 2000,
    reverseDirection: false,
    disableOnInteraction: false,
    stopOnLast: true,
  },
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
      spaceBetween: 8,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
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
let btn = document.querySelector(".btn");
var Name = document.getElementById("name");
let email = document.getElementById("email");
let Submit = document.querySelector(".submit");
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
// btnSubmit.addEventListener("click", () => {
//   alert("123");

//   if ($("#email").value == "") {
//     return false;
//   } else {
//     btnOpen.style.display = "none";
//     popup.style.display = "none";
//     popup1.style.display = "block";
//     return true;
//   }
// });

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
function applyUser(event) {
  event.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById("name1").value;
  const email = document.getElementById("email1").value;

  // Check if the username and password fields are empty
  if (name.trim() === "" || email.trim() === "") {
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: "Please enter both name and email.",
    });
    return; // Exit the function early, no further processing
  } else {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: " Successfully Applied!",
      timer: 2000, // Automatically close after 2 seconds
      showConfirmButton: false, // Hide the "OK" button
    }).then(() => {
      // Redirect the user to the dashboard or another page
      window.location.href = "index.html";
    });
  }
}

function registerUser(event) {
  event.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Check if the username and password fields are empty
  if (name.trim() === "" || email.trim() === "") {
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: "Please enter both name and email.",
    });
    return; // Exit the function early, no further processing
  } else {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: " Successfully Registered!",
      timer: 2000, // Automatically close after 2 seconds
      showConfirmButton: false, // Hide the "OK" button
    }).then(() => {
      // Redirect the user to the dashboard or another page
      window.location.href = "index.html";
    });
  }
}
const tooltipTrigger = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipContent = [...tooltipTrigger].map(
  (tooltipEl) => new bootstrap.Tooltip(tooltipEl)
);

// const navLinkEls = document.querySelectorAll(".nav-link");
// const sectionEls = document.querySelectorAll(".secton");

// let currentSection = "About";
// window.addEventListener("scroll", () => {
//   sectionEls.forEach((sectionEl) => {
//     if (window.scrollY >= sectionEl.offsetTop) {
//       currentSection = sectionEl.id;
//     }
//   });
//   navLinkEls.forEach((navLinkEl) => {
//     if (navLinkEl.href.includes(currentSection)) {
//       navLinkEl.classList.add("active");
//     }
//   });
// });

var modalWrap = null;
const showModal = () => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
      <div class="modal fade" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-light">
              <h5 class="modal-title"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p></p>
            </div>
            <div class="modal-footer bg-light">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${noBtnLabel}</button>
              <button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
            </div>
          </div>
        </div>
      </div>
    `;

  document.body.append(modalWrap);

  var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};
