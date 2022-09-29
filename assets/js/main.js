/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*=================== Accordion ====================*/

const accordionItems = document.querySelectorAll(".about__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".about__accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".about__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*==================== HIDE MENU ====================*/

const hideMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.remove("show-menu");
    });
  }
};

showMenu("x", "nav-menu");

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
  },

  thumbs: {
    swiper: galleryThumbs,
  },
});

let footer = new Swiper(".nav__menu1", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

/*==================== POPUP1 2 ====================*/
const btnOpenVideo = document.querySelectorAll(".oplus__video-content1");
const oplusPopup = document.getElementById("popup1");

function poPup() {
  oplusPopup.classList.add("show-popup");
}
btnOpenVideo.forEach((b) => b.addEventListener("click", poPup));

const btnCloseVideo = document.getElementById("popup-close");

btnCloseVideo.addEventListener("click", () => {
  oplusPopup.classList.remove("show-popup");
});

/*==================== POPUP3 ====================*/
const btnOpenVideo3 = document.querySelectorAll(".oplus__video-content3");
const oplusPopup3 = document.getElementById("popup3");

function poPup3() {
  oplusPopup3.classList.add("show-popup");
}
btnOpenVideo3.forEach((b) => b.addEventListener("click", poPup3));

const btnCloseVideo3 = document.getElementById("popup-close3");

btnCloseVideo3.addEventListener("click", () => {
  oplusPopup3.classList.remove("show-popup");
});

/*==================== POPUP4 ====================*/
const btnOpenVideo4 = document.querySelectorAll(".oplus__video-content4");
const oplusPopup4 = document.getElementById("popup4");

function poPup4() {
  oplusPopup4.classList.add("show-popup");
}
btnOpenVideo4.forEach((b) => b.addEventListener("click", poPup4));

const btnCloseVideo4 = document.getElementById("popup-close4");

btnCloseVideo4.addEventListener("click", () => {
  oplusPopup4.classList.remove("show-popup");
});

/*==================== POPUP5 ====================*/
const btnOpenVideo5 = document.querySelectorAll(".oplus__video-content5");
const oplusPopup5 = document.getElementById("popup5");

function poPup5() {
  oplusPopup5.classList.add("show-popup");
}
btnOpenVideo5.forEach((b) => b.addEventListener("click", poPup5));

const btnCloseVideo5 = document.getElementById("popup-close5");

btnCloseVideo5.addEventListener("click", () => {
  oplusPopup5.classList.remove("show-popup");
});

/*==================== POPUP10 ====================*/
const btnOpenVideo10 = document.querySelectorAll(".oplus__video-content10");
const oplusPopup10 = document.getElementById("popup10");

function poPup10() {
  oplusPopup10.classList.add("show-popup");
}
btnOpenVideo10.forEach((b) => b.addEventListener("click", poPup10));

const btnCloseVideo10 = document.getElementById("popup-close10");

btnCloseVideo10.addEventListener("click", () => {
  oplusPopup10.classList.remove("show-popup");
});

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll(".controls__img");

function scrollAnimation() {
  gsap.from(".oplus__subtitle", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  /* gsap.from(".oplus__title", { opacity: 0, duration: 0.3, delay: 0.3, y: -20 });
  gsap.from(".oplus__description", {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from(".oplus__button", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: -20,
  });
  gsap.from(".oplus__video-content", {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });*/

  oplusPopup.classList.remove("show-popup");
}

controlImg.forEach((c) => c.addEventListener("click", scrollAnimation));

TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay", 2, {
  delay: 1,
  top: "-110%",
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".nav ul li",
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  0.2,
);

TweenMax.staggerFrom(
  ".nav__logo",
  1,
  {
    delay: 2.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  0.2,
);

TweenMax.staggerFrom(
  ".social-media ul li",
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  0.2,
);

TweenMax.staggerFrom(
  ".controls",
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  0.2,
);

TweenMax.staggerFrom(
  ".oplus__data",
  1,
  {
    delay: 2.0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  0.2,
);

/*oplus__data*/

function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollSide() {
  const header = document.getElementById("side__menu");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 300) header.classList.add("scroll-side");
  else header.classList.remove("scroll-side");
}
window.addEventListener("scroll", scrollSide);

function scrollBottom() {
  const header = document.getElementById("clients");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 300) header.classList.add("scroll-bottom");
  else header.classList.remove("scroll-bottom");
}
window.addEventListener("scroll", scrollBottom);

const bottom = document.getElementsByClassName("slider__bottom");
let timerIndex = 0;
const bottomLength = bottom.length;
// setInterval(function () {
//   for (let i = 0; i < bottom.length; i++) {
//     bottom[i].classList.remove("revealed");
//   }
//   bottom[timerIndex++ % bottomLength].classList.add("revealed");
// }, 3000);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(".boximg", {
  origin: "left",
  interval: 100,
});

sr.reveal(".about__text", {
  origin: "top",
  interval: 100,
});

sr.reveal(".team__img", {
  origin: "bottom",
  interval: 100,
});

sr.reveal(".team__text", {
  origin: "top",
  interval: 100,
});

const menu = document.getElementById("menu");
const header = document.getElementById("header");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("menu-icon");

icon1.addEventListener("click", () => {
  menu.classList.toggle("open");
  icon2.classList.toggle("bx-x-circle");
});
