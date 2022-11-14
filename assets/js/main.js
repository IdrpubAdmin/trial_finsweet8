"use strict";

// podcast.html - all products category js
// function categoryOn() {
//   const itemTab = document.querySelector('.category_podcasts')
//   const item = document.querySelectorAll('.page_podcast .data li')

//   const btn = document.querySelectorAll('.page_podcas .cate_pod')

//   itemTab.addEventListener('click', (e) => {
//     const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
//     if (filter == null) {
//       return;
//     }
//     item.forEach((item) => {
//       if (filter === '*' || filter === item.dataset.type) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";

//       }
//     });
//   });

// }

// categoryOn();

// dark mode
const $checkbox = document.querySelector('.dark_mode');

$checkbox.addEventListener('click', e=> {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});

//home swiper
var swiper = new Swiper(".custom_swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  variableWidth: true,
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  }
});


// about.html - meet our team swiper
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






