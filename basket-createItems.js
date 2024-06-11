const addToCartBtn = document.getElementById("add-Cart");
const form = document.getElementById("product-form");
const cartProductContainer = document.getElementById("cartProduct-container");
const price = document.getElementById("product-price");
const productName = document.getElementById("product-Title");
const productImage = document.getElementById("product-image");
// function add to cart

function storeCartData() {
  const user = {
    image: productImage.src,
    title: productName.textContent,
    price: price.textContent,
    Sizes: form.Sizes.value,
    quantity: form.quantity.value,
  };
  let productCartData = JSON.stringify(user);
  localStorage.setItem("productCart data", productCartData);
}

// function to create product cards in basket tray
function createBasketProduct() {
  // remove empty cart text
  const emptyCart = document.querySelector(".empty-cart");
  emptyCart.textContent = "";

  // get data from local storage
  productCartData = JSON.parse(localStorage.getItem("productCart data"));

  //   create elements & use objects to get data
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
  cartProductSize.textContent = `Size:${productCartData.Sizes}`;
  cartProductSize.classList.add("productSize");

  const cartProductQuantity = document.createElement("p");
  cartProductQuantity.textContent = `Quantity:${productCartData.quantity}`;
  cartProductQuantity.classList.add("product-quantity");

  //   build product cards in basket by appending

  cartProductData.append(
    cartProductTitle,
    cartProductPrice,
    cartProductSize,
    cartProductQuantity
  );

  cartProductInfo.append(cartProductImg, cartProductData);

  cartProductContainer.appendChild(cartProductInfo);
}

function addToCart(e) {
  e.preventDefault();
  // add cart to local storage
  storeCartData();
  //   create basket product card
  createBasketProduct();
}

//event listeners
addToCartBtn.addEventListener("click", addToCart);
