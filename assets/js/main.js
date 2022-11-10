"use strict";

// dark mode
const $checkbox = document.querySelector('.dark_mode');

$checkbox.addEventListener('click', e=> {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 2500
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50
//     }
//   }
// });

// meet our team swiper
var swiper = new Swiper(".meetTeamSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  // loop: true,
  pagination: {
    el: ".team-pagination",
    clickable: true,
  },
  variableWidth: true,
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.4,
    },
    820: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  }
});

