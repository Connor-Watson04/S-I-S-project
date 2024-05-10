//NW hoodie
const nwGreyFront = document.getElementById("NW-grey-front");
const nwGreyLeft = document.getElementById("NW-grey-sideLeft");
const nwGreyRight = document.getElementById("NW-grey-sideRight");
const nwBlackFront = document.getElementById("NW-black-front");
const nwBlackBack = document.getElementById("NW-black-back");
const nwBlackBackFlat = document.getElementById("NW-black-flatBack");
const nwBlackFrontFlat = document.getElementById("NW-black-flatFront");
const nwWhiteLeft = document.getElementById("NW-white-sideLeft");
const nwWhiteRight = document.getElementById("NW-white-sideRight");
const nwBaseHoodie = document.querySelector(".NW-Hoodie");

nwGreyFront.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-greyHoodie-sideRight",
    "NW-blackHoodie-front",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-baseHoodie-img");
});

nwGreyLeft.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-greyHoodie-front",
    "NW-baseHoodie-img",
    "NW-greyHoodie-sideRight",
    "NW-blackHoodie-front",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-greyHoodie-sideLeft");
});

nwGreyRight.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-blackHoodie-front",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-greyHoodie-sideRight");
});

nwBlackFront.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-baseHoodie-img",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-blackHoodie-front");
});

nwBlackBack.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-baseHoodie-img",
    "NW-blackHoodie-front",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-blackHoodie-back");
});

nwBlackBackFlat.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-blackHoodie-front",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-blackHoodie-flatBack");
});

nwBlackFrontFlat.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-blackHoodie-front",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatBack",
    "NW-whiteHoodie-sideRight",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-blackHoodie-flatFront");
});

nwWhiteRight.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-blackHoodie-front",
    "NW-blackHoodiegit -back",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideLeft"
  );
  nwBaseHoodie.classList.add("NW-whiteHoodie-sideRight");
});

nwWhiteLeft.addEventListener("click", function () {
  nwBaseHoodie.classList.remove(
    "NW-baseHoodie-img",
    "NW-greyHoodie-front",
    "NW-greyHoodie-sideLeft",
    "NW-blackHoodie-front",
    "NW-blackHoodie-back",
    "NW-blackHoodie-flatBack",
    "NW-blackHoodie-flatFront",
    "NW-whiteHoodie-sideRight"
  );
  nwBaseHoodie.classList.add("NW-whiteHoodie-sideLeft");
});
