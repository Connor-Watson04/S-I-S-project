//PDP images

//NW PRODUCTS

//NW HAT
const femaleBlue = document.getElementById("LE-NW-fem-blue");
const frontBlue = document.getElementById("LE-NW-front-blue");
const maleBlue = document.getElementById("LE-NW-man-blue");
const femaleGrey = document.getElementById("LE-NW-fem-grey");
const frontGrey = document.getElementById("LE-NW-front-grey");
const maleGrey = document.getElementById("LE-NW-man-grey");
const femaleWhite = document.getElementById("LE-NW-fem-white");
const maleWhite = document.getElementById("LE-NW-man-white");
const frontWhite = document.getElementById("LE-NW-front-white");

const limitedCap = document.querySelector(".LE-NW-CAP");

femaleBlue.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  limitedCap.classList.add("LE-NW-fem-blueHat");
});
frontBlue.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-fem-blueHat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  limitedCap.classList.add("LE-NW-blue-hat");
});
maleBlue.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  limitedCap.classList.add("LE-NW-man-blueHat");
});
femaleGrey.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-blueHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  limitedCap.classList.add("LE-NW-fem-greyHat");
});
frontGrey.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-fem-blueHat",
    "LE-NW-man-greyHat"
  );
  limitedCap.classList.add("LE-NW-grey-hat");
});
maleGrey.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-fem-blueHat"
  );
  limitedCap.classList.add("LE-NW-man-greyHat");
});
femaleWhite.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-fem-greyHat",
    "LE-NW-base-image-hat",
    "LE-NW-man-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-blueHat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-man-whiteHat",
    "LE-NW-white-hat"
  );
  limitedCap.classList.add("LE-NW-fem-whiteHat");
});
maleWhite.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-fem-greyHat",
    "LE-NW-base-image-hat",
    "LE-NW-man-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-blueHat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-fem-whiteHat",
    "LE-NW-white-hat"
  );
  limitedCap.classList.add("LE-NW-man-whiteHat");
});

frontWhite.addEventListener("click", function () {
  limitedCap.classList.remove(
    "LE-NW-fem-greyHat",
    "LE-NW-base-image-hat",
    "LE-NW-man-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-blueHat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-fem-whiteHat",
    "LE-NW-man-whiteHat"
  );
  limitedCap.classList.add("LE-NW-white-hat");
});

//block colours

const blueSelector = document.getElementById("blue-block");
const greySelector = document.getElementById("Grey-block");
const whiteSelector = document.getElementById("White-block");
const collageOne = document.getElementById("collage-block-1");
const collageTwo = document.getElementById("collage-block-2");
const collageThree = document.getElementById("collage-block-3");

blueSelector.addEventListener("click", function () {
  collageTwo.classList.add("hidden-images");
  greySelector.classList.remove("selected-block");

  limitedCap.classList.remove(
    "LE-NW-fem-greyHat",
    "LE-NW-fem-whiteHat",
    "LE-NW-man-blueHat",
    "LE-NW-man-greyHat",
    "LE-NW-blue-hat",
    "LE-NW-grey-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-white-hat",
    "LE-NW-man-whiteHat"
  );
  limitedCap.classList.add("LE-NW-base-image-hat");

  blueSelector.classList.add("selected-block");
  collageOne.classList.remove("hidden-images");

  whiteSelector.classList.remove("selected-block");
  collageThree.classList.add("hidden-images");
});

greySelector.addEventListener("click", function () {
  collageOne.classList.add("hidden-images");
  blueSelector.classList.remove("selected-block");

  limitedCap.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-fem-whiteHat",
    "LE-NW-man-blueHat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-white-hat",
    "LE-NW-man-whiteHat"
  );
  limitedCap.classList.add("LE-NW-fem-greyHat");

  collageTwo.classList.remove("hidden-images");
  greySelector.classList.add("selected-block");

  whiteSelector.classList.remove("selected-block");
  collageThree.classList.add("hidden-images");
});

whiteSelector.addEventListener("click", function () {
  collageOne.classList.add("hidden-images");
  blueSelector.classList.remove("selected-block");

  collageTwo.classList.add("hidden-images");
  greySelector.classList.remove("selected-block");

  collageThree.classList.remove("hidden-images");
  whiteSelector.classList.add("selected-block");

  limitedCap.classList.remove(
    "LE-NW-fem-greyHat",
    "LE-NW-base-image-hat",
    "LE-NW-man-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-blueHat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat"
  );
  limitedCap.classList.add("LE-NW-fem-whiteHat");
});

//selected images