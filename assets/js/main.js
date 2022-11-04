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


