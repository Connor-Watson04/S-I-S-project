//open basket

const basketBtn = document.getElementById("basket-button");
const basketTab = document.getElementById("basket-tab");
const activeBasket = document.getElementById("active-basket");

basketBtn.textContent = "basket";

basketBtn.addEventListener("click", function () {
  basketTab.classList.remove("hidden-tab");
});

//close basket
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", function () {
  basketTab.classList.add("hidden-tab");
});
