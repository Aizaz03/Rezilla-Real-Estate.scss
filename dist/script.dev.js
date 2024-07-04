"use strict";

/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
/* Slideshow JavaScript */


var tabs = document.querySelectorAll("[data-tab-target]");
var tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    var target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
//# sourceMappingURL=script.dev.js.map
