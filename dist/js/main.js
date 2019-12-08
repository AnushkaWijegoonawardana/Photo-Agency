// ========== Hero Slider ==========

const slides = document.querySelectorAll(".slider");
const slidePrev = document.querySelector("#prev-slide");
const slideNext = document.querySelector("#next-slide");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const active = document.querySelector(".active");
  active.classList.remove("active");

  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }

  setTimeout(() => active.classList.remove("active"));
};

const prevSlide = () => {
  const active = document.querySelector(".active");
  active.classList.remove("active");

  if (active.previousElementSibling) {
    active.previousElementSibling.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
  }

  setTimeout(() => active.classList.remove("active"));
};

slidePrev.addEventListener("click", e => {
  prevSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

slideNext.addEventListener("click", e => {
  nextSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// ========== Hero Slider ==========

// ========== Sticky Header Scorlling Function ==========
// When the user scrolls the page, execute stickyHeader
window.onscroll = function() {
  stickyHeader();
};

// Get the header
const header = document.getElementById("header-navigation");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ========== Sticky Header Scorlling Function ==========

// ========== Overlayer Header Functions ==========

function openOvelayer() {
  document.querySelector("#overlayer-navigation").style.width = "100vw";
}

function closeOverlayer() {
  document.querySelector("#overlayer-navigation").style.width = "0vw";
}

// ========== Overlayer Header Functions ==========

// ========== Gallery Slider Settings ==========
let gsliderIndex = 0;
gsliderShow();

function gsliderShow() {
  let i;
  const slides = document.querySelectorAll(".gslider-item");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  gsliderIndex++;

  if (gsliderIndex > slides.length) {
    gsliderIndex = 1;
  }
  slides[gsliderIndex - 1].style.display = "block";
  setTimeout(gsliderShow, 3000);
}
// ========== Gallery Slider Settings ==========
