//PDP images

//NW PRODUCTS

//NW HAT
const femaleBlue = document.getElementById("LE-NW-fem-blue");
const frontBlue = document.getElementById("LE-NW-front-blue");
const maleBlue = document.getElementById("LE-NW-man-blue");
const femaleGrey = document.getElementById("LE-NW-fem-grey");
const frontGrey = document.getElementById("LE-NW-front-grey");
const maleGrey = document.getElementById("LE-NW-man-grey");

const largeImg = document.getElementById("img-large");

femaleBlue.addEventListener("click", function () {
  largeImg.classList.remove(
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  largeImg.classList.add("LE-NW-fem-blueHat");
});
frontBlue.addEventListener("click", function () {
  largeImg.classList.remove(
    "LE-NW-fem-blueHat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  largeImg.classList.add("LE-NW-blue-hat");
});
maleBlue.addEventListener("click", function () {
  largeImg.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-fem-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  largeImg.classList.add("LE-NW-man-blueHat");
});
femaleGrey.addEventListener("click", function () {
  largeImg.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-blueHat",
    "LE-NW-grey-hat",
    "LE-NW-man-greyHat"
  );
  largeImg.classList.add("LE-NW-fem-greyHat");
});
frontGrey.addEventListener("click", function () {
  largeImg.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-fem-blueHat",
    "LE-NW-man-greyHat"
  );
  largeImg.classList.add("LE-NW-grey-hat");
});
maleGrey.addEventListener("click", function () {
  largeImg.classList.remove(
    "LE-NW-base-image-hat",
    "LE-NW-blue-hat",
    "LE-NW-man-blueHat",
    "LE-NW-fem-greyHat",
    "LE-NW-grey-hat",
    "LE-NW-fem-blueHat"
  );
  largeImg.classList.add("LE-NW-man-greyHat");
});

//NW hoodie

//JB PRODUCTS

//JB HAT

//FW PRODUCTS

//FW HAT
