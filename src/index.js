import './index.css.scss';
import 'normalize.css';
import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';
import $ from 'jquery';
window.$ = require('jquery');

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
})
