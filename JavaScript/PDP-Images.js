//PDP images

const femaleBlue = document.getElementById("fem-blue");
const frontBlue = document.getElementById("front-blue");
const maleBlue = document.getElementById("man-blue");
const femaleGrey = document.getElementById("fem-grey");
const frontGrey = document.getElementById("front-grey");
const maleGrey = document.getElementById("man-grey");

const largeImg = document.getElementById("img-large");

femaleBlue.addEventListener("click", function () {
  largeImg.classList.remove(
    "blue-hat",
    "man-blueHat",
    "fem-greyHat",
    "grey-hat",
    "man-greyHat"
  );
  largeImg.classList.add("fem-blueHat");
});
frontBlue.addEventListener("click", function () {
  largeImg.classList.remove(
    "fem-blueHat",
    "man-blueHat",
    "fem-greyHat",
    "grey-hat",
    "man-greyHat"
  );
  largeImg.classList.add("blue-hat");
});
maleBlue.addEventListener("click", function () {
  largeImg.classList.remove(
    "base-image",
    "blue-hat",
    "fem-blueHat",
    "fem-greyHat",
    "grey-hat",
    "man-greyHat"
  );
  largeImg.classList.add("man-blueHat");
});
femaleGrey.addEventListener("click", function () {
  largeImg.classList.remove(
    "base-image",
    "blue-hat",
    "man-blueHat",
    "fem-blueHat",
    "grey-hat",
    "man-greyHat"
  );
  largeImg.classList.add("fem-greyHat");
});
frontGrey.addEventListener("click", function () {
  largeImg.classList.remove(
    "base-image",
    "blue-hat",
    "man-blueHat",
    "fem-greyHat",
    "fem-blueHat",
    "man-greyHat"
  );
  largeImg.classList.add("grey-hat");
});
maleGrey.addEventListener("click", function () {
  largeImg.classList.remove(
    "base-image",
    "blue-hat",
    "man-blueHat",
    "fem-greyHat",
    "grey-hat",
    "fem-blueHat"
  );
  largeImg.classList.add("man-greyHat");
});
