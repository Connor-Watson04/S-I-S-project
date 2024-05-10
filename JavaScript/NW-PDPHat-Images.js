//PDP images

//NW PRODUCTS

//NW HAT
const femaleBlue = document.getElementById("LE-NW-fem-blue");
const frontBlue = document.getElementById("LE-NW-front-blue");
const maleBlue = document.getElementById("LE-NW-man-blue");
const femaleGrey = document.getElementById("LE-NW-fem-grey");
const frontGrey = document.getElementById("LE-NW-front-grey");
const maleGrey = document.getElementById("LE-NW-man-grey");
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
