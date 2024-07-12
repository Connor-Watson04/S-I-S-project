export default {
    template: `
        <div>
            <button
                @click="openBasket"
                id="basket-button"
                class="navigation-link">{{ title }}</button>
            <div id="basket-tab" hidden>
                <div id="basketContent"></div>
                <button id="close">Close</button>
            </div>
        </div>
    `,
    props: {
        title: {
            type: String,
            default: 'Basket'
        }
    },
    methods: {
        updateCartDOM() {
            const basket = document.getElementById("basketContent");
            if (!basket) return;

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
        },
        openBasket() {
            const basketTray = document.querySelector('#basket-tab');
            if (basketTray) {
                basketTray.hidden = false;
            }
        },
        closeBasket() {
            const basketTray = document.querySelector('#basket-tab');
            if (basketTray) {
                basketTray.hidden = true;
            }
        }
    },
    mounted() {
        const cartBtn = document.getElementById("addToCart");
        if (cartBtn) {
            cartBtn.addEventListener("click", this.updateCartDOM);
        }

        const basketBtn = document.getElementById('basket-button');
        if (basketBtn) {
            basketBtn.textContent = this.title;
            basketBtn.addEventListener('click', this.openBasket);
        }

        const closeBtn = document.querySelector('#close');
        if (closeBtn) {
            closeBtn.addEventListener('click', this.closeBasket);
        }
    }
};
