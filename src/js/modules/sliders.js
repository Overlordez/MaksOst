import Flickity from "Flickity";

import "flickity/dist/flickity.css";



if (document.querySelector(".feedback-slider")) {
  let flktyA = new Flickity(".feedback-slider", {
    wrapAround: true,
    prevNextButtons: false,
    cellAlign: "left",
    draggable: true,
    pageDots: false,
    contain: true,
    adaptiveHeight: true,
    initialIndex: 0
  });

  var prevArrowReviews = document.querySelector(".arrow-prew");

  prevArrowReviews.addEventListener("click", function () {
    flktyA.previous(true, false);
  });

  var nextArrowReviews = document.querySelector(".arrow-next");

  nextArrowReviews.addEventListener("click", function () {
    flktyA.next(true, false);
  });
}



if (document.querySelector(".galery-slider")) {
  let flktyB = new Flickity(".galery-slider", {
    wrapAround: true,
    prevNextButtons: false,
    cellAlign: "left",
    draggable: true,
    pageDots: false,
    contain: true,
    initialIndex: 0
  });

  var prevArrowReviews = document.querySelector(".galery-arrow-prew");

  prevArrowReviews.addEventListener("click", function () {
    flktyB.previous(true, false);
  });

  var nextArrowReviews = document.querySelector(".galery-arrow-next");

  nextArrowReviews.addEventListener("click", function () {
    flktyB.next(true, false);
  });
}
