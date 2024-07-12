// relevent elements
const basket = document.getElementById("basketContent");
const cartBtn = document.getElementById("addToCart");

// create elements on click
function updateCartDOM() {
  const cartProductContainer = document.createElement("div");
  cartProductContainer.classList.add("cartProduct-container");

  const cartProductInfo = document.createElement("div");
  cartProductInfo.classList.add("cartProduct-info");

  const cartProductImage = document.createElement("img");
  cartProductImage.classList.add("cartProduct-img");

  const cartData = document.createElement("div");
  cartData.classList.add("cartProduct-data");

  const cartProductTitle = document.createElement("h3");
  cartProductTitle.classList.add("cartProduct-title");

  const cartProductSize = document.createElement("p");
  cartProductSize.classList.add("cartProduct-size");

  const cartProductQuantity = document.createElement("p");
  cartProductQuantity.classList.add("cartProduct-quantity");

  const cartProductPrice = document.createElement("p");
  cartProductPrice.classList.add("cartProduct-price");

  const deleteItem = document.createElement("button");
  deleteItem.classList.add("deleteCart-btn");

  const trashBtn = document.createElement("i");
  trashBtn.classList.add("fa-solid", "fa-trash-can", "cartDelete-item");

  deleteItem.append(trashBtn);

  cartData.append(
    cartProductTitle,
    cartProductSize,
    cartProductQuantity,
    cartProductPrice,
    deleteItem
  );

  cartProductInfo.append(cartProductImage, cartData);

  cartProductContainer.append(cartProductInfo);

  basket.appendChild(cartProductContainer);
}

// event listeners
cartBtn.addEventListener("click", updateCartDOM);

