const loading = document.querySelector(".loading");
const navBar = document.querySelector(".nav");

setTimeout(() => {
  loading.classList.add("hide");
}, 1000);

const navList = document.querySelector(".nav-list");
const mobileBtn = document.querySelector(".mobile-btn");

mobileBtn.onclick = () => {
  navList.classList.toggle("open");
};

const pagesBtn = document.querySelector(".menu");
const dropDwon = document.querySelector(".drop-down");
pagesBtn.onclick = () => {
  dropDwon.classList.toggle("expand");
};

window.onscroll = () => {
  if (window.scrollY > 300) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};
var swiper = new Swiper(".testmoinalis-mySwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    769: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
