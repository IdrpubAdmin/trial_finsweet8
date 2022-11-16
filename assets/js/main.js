"use strict";


/*---------------------------------------------------------------------------------------------------------------------------
 * 	 gnb
 *--------------------------------------------------------------------------------------------------------------------------*/

function gnb() {

  const burger = document.querySelector('.mo_hamburger');
  const sub = document.querySelector('.sub_menu');
  const bgOn = document.querySelector('.bg_gray');

  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    sub.classList.toggle('mo_menu_on')
    bgOn.classList.toggle('mo_bg_on')
    document.body.classList.toggle('no_scroll')
  })

}

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 scrollTop
 *--------------------------------------------------------------------------------------------------------------------------*/

function scrollTop() {

  const btn = document.querySelector('.btn_top')
  
  window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop > 100) {
      btn.classList.remove('dn');
      btn.classList.add('db');
    } else {
      btn.classList.remove('db');
      btn.classList.add('dn');
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
  
}

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 headerFixed
 *--------------------------------------------------------------------------------------------------------------------------*/

function headerFixed() {

  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  
  window.onscroll = function() {
    const windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
      header.classList.add("drop");
    } 
    else {
      header.classList.remove("drop");
    }
  };
  
}

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 Podcast.html - categoryOn, classOn
 *--------------------------------------------------------------------------------------------------------------------------*/

function categoryOn() {
  const itemTab = document.querySelector('.category_podcasts')
  const item = document.querySelectorAll('.page_podcast .data li')
  const btn = document.querySelectorAll('.page_podcast .cate_pod')

  itemTab.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
      return;
    }
    item.forEach((item) => {
      if (filter === '*' || filter === item.dataset.type) {
        item.style.display = "block";
      } else {
        item.style.display = "none";

      }
    });
  });

}

function classOn() {

  const btns = document.querySelectorAll('.page_podcast .cate_pod')

  Array.from(btns).forEach(item => {
      item.addEventListener("click", () => {
         var selected = document.getElementsByClassName("on");
         selected[0].className = selected[0].className.replace(" on", "");
         item.className += " on";
      });
   });

}

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 darkmode
 *--------------------------------------------------------------------------------------------------------------------------*/

const $checkbox = document.querySelector('.dark_mode');

$checkbox.addEventListener('click', e=> {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 home swiper
 *--------------------------------------------------------------------------------------------------------------------------*/

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


/*---------------------------------------------------------------------------------------------------------------------------
 * 	meet our team swiper
 *--------------------------------------------------------------------------------------------------------------------------*/

var swiper = new Swiper(".meetTeamSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  autoplay: true,
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

/*---------------------------------------------------------------------------------------------------------------------------
 * 	window.onload
 *--------------------------------------------------------------------------------------------------------------------------*/

window.onload = function() {
  gnb();
  scrollTop();
  headerFixed();
  categoryOn();
  classOn();
}



