// select relevant elements for ALL product tabs

const cartProductContainers = document.querySelectorAll(
  "#cartProduct-container"
);
const addToCartBtns = document.querySelectorAll(".add-Cart");
const forms = document.querySelectorAll(".product-form");
const prices = document.querySelectorAll(".product-price");
const productNames = document.querySelectorAll(".product-Title");
const productImages = document.querySelectorAll(".product-image");

// function to store cart data

function storeCartData(image, title, price, form) {
  let user = {
    image: image.src,
    title: title.textContent,
    price: price.textContent,
    Sizes: form.Sizes.value,
    quantity: form.quantity.value,
  };
  console.log(user);
  let productCartData = JSON.stringify(user);
  localStorage.setItem("productCart data", productCartData);
}

// function to create product cards in basket tray
function createBasketProduct(container) {
  // remove empty cart text
  const emptyCart = document.querySelector(".empty-cart");
  emptyCart.textContent = "";

  // get data from local storage
  const productCartData = JSON.parse(localStorage.getItem("productCart data"));

  // create elements & use objects to get data
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

  const cartDeleteItem = document.createElement("i");
  cartDeleteItem.classList.add("fa-solid", "fa-trash-can", "cartDelete-item");

  // build product cards in basket by appending
  cartProductData.append(
    cartProductTitle,
    cartProductPrice,
    cartProductSize,
    cartProductQuantity,
    cartDeleteItem
  );

  cartProductInfo.append(cartProductImg, cartProductData);

  container.appendChild(cartProductInfo);
}

// function to add to cart
function addToCart(e, image, title, price, form, container) {
  e.preventDefault();
  // Add cart to local storage
  storeCartData(image, title, price, form);
  // Create basket product card
  createBasketProduct(container);
}

//event listener for each product tab to actually add to basket
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
