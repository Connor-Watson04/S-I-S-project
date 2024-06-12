// Select relevant elements for ALL product tabs
const cartProductContainers = document.querySelectorAll(
  "#cartProduct-container"
);
const addToCartBtns = document.querySelectorAll(".add-Cart");
const forms = document.querySelectorAll(".product-form");
const prices = document.querySelectorAll(".product-price");
const productNames = document.querySelectorAll(".product-Title");
const productImages = document.querySelectorAll(".product-image");

// Function to store cart data
function storeCartData(image, title, price, form) {
  let user = {
    image: image.src,
    title: title.textContent,
    price: price.textContent,
    Sizes: form.Sizes.value,
    quantity: form.quantity.value,
  };

  let productCartData = JSON.stringify(user);
  localStorage.setItem("productCart data", productCartData);
}

// Function to create product cards in basket tray
function createBasketProduct(container) {
  // Remove empty cart text
  const emptyCart = document.querySelector(".empty-cart");
  emptyCart.textContent = "";

  // Get data from local storage
  const productCartData = JSON.parse(localStorage.getItem("productCart data"));

  // Create elements & use objects to get data
  const cartProductInfo = document.createElement("div");
  cartProductInfo.classList.add("cartProduct-info");

  const cartProductData = document.createElement("div");
  cartProductData.classList.add("cartProduct-data");

  const cartProductImg = document.createElement("img");
  cartProductImg.src = `${productCartData.image}`;
  cartProductImg.classList.add("cartProduct-img");

  const cartProductTitle = document.createElement("h3");
  cartProductTitle.textContent = `${productCartData.title}`;
  cartProductTitle.classList.add("cartProduct-title");

  const cartProductPrice = document.createElement("p");
  cartProductPrice.textContent = `${productCartData.price}`;
  cartProductPrice.classList.add("cartProduct-price");

  const cartProductSize = document.createElement("p");
  cartProductSize.textContent = `Size: ${productCartData.Sizes}`;
  cartProductSize.classList.add("productSize");

  const cartProductQuantity = document.createElement("p");
  cartProductQuantity.textContent = `Quantity: ${productCartData.quantity}`;
  cartProductQuantity.classList.add("product-quantity");

  let deleteCartItemBtn = document.createElement("button");
  deleteCartItemBtn.classList.add("deleteCart-btn");

  const cartDeleteItem = document.createElement("i");
  cartDeleteItem.classList.add("fa-solid", "fa-trash-can", "cartDelete-item");

  // Build product cards in basket by appending
  deleteCartItemBtn.append(cartDeleteItem);

  cartProductData.append(
    cartProductTitle,
    cartProductPrice,
    cartProductSize,
    cartProductQuantity,
    deleteCartItemBtn
  );

  cartProductInfo.append(cartProductImg, cartProductData);

  container.appendChild(cartProductInfo);

  // Add event listener to the delete button
  deleteCartItemBtn.addEventListener("click", () => {
    removeBasketProduct(cartProductInfo);
  });
}

// Function to remove a product card from the basket
function removeBasketProduct(cartProductInfo) {
  const container = cartProductInfo.parentNode;
  container.removeChild(cartProductInfo);

  // Check if the cart is empty and show empty cart text
  if (!container.hasChildNodes()) {
    const emptyCart = document.querySelector(".empty-cart");
    emptyCart.textContent = "Your Cart is empty";
  }
}

// Function to add to cart
function addToCart(e, image, title, price, form, container) {
  e.preventDefault();
  // Add cart to local storage
  storeCartData(image, title, price, form);
  // Create basket product card
  createBasketProduct(container);
}

// Event listener for each product tab to actually add to basket
addToCartBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) =>
    addToCart(
      e,
      productImages[index],
      productNames[index],
      prices[index],
      forms[index],
      cartProductContainers[0]
    )
  );
});
