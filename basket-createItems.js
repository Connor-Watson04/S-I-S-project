const addToCartBtn = document.getElementById("add-Cart");
const form = document.getElementById("product-form");
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
  console.log(user);
  let productCartData = JSON.stringify(user);
  localStorage.setItem("productCart data", productCartData);
}

function addToCart(e) {
  e.preventDefault();
  // add cart to local storage
  storeCartData();
}

//event listeners
addToCartBtn.addEventListener("click", addToCart);
