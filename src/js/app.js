import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: true,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

const mediaQuery991 = window.matchMedia('(max-width: 991px)');

$(".mainSlider").each(function () {
  // Swiper initialization
  new Swiper(this, {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: document.querySelector('.mainSlider .navArrowPrev'),
      nextEl: document.querySelector('.mainSlider .navArrowNext'),
    },
    pagination: {
      el: document.querySelector('.mainSlider .swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
});

if (mediaQuery991.matches) {
  // Инициализация слайдера se
  document.querySelectorAll('.serviceSmSlider').forEach(n => {
    const mySwiperServiceSm = new Swiper(n, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      navigation: {
        prevEl: n.querySelector('.navArrowPrev'),
        nextEl: n.querySelector('.navArrowNext'),
      },
    });
  });
}

function findOffset(element) {

  if (mediaQuery991.matches) {
    var top = 400, left = 0;
  } else {
    var top = 400, left = 0;
  }

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById('header-fixed');
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add('fixed');
    } else {
      stickyHeader.classList.remove('fixed');
    }
  };

  let introBtnPause = document.querySelector('.introBtnPause');
  let introVideo = document.querySelector('.introVideo');

  function pauseVideo() {
    let introVideo = document.querySelector('.introVideo');
    introVideo.pause();
  }
  function setPlayIcon(){
    introBtnPause.classList.remove('pause');
    introBtnPause.classList.add('play');
  }
  function setPauseIcon(){
    introBtnPause.classList.remove('play');
    introBtnPause.classList.add('pause');
  }
  function playVideo() {
    let introVideo = document.querySelector('.introVideo');
    introVideo.play();
  }

  introBtnPause?.addEventListener('click', () => {

    if (!introVideo.paused) {
      pauseVideo();
      setPlayIcon();
    } else {
      playVideo();
      setPauseIcon();
    }
  });


};

