// Select elements
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// Render products
function renderProducts(){
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgScr}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>AR$</small>"${product.price}</h2>
                        <p>
                        "${product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
    `
    })
}
renderProducts();

// Cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart
function addToCart(id){
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find((product) => product.id === id);
    
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    };

    updateCart();
}

// Update cart
function updateCart() {
    renderCartItems();
    renderSubtotal();
    
    // Save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

// Calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}

// Render cart items
function renderCartItems() {
    cartItemsEl.innerHTML = ""; // Clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
            <div class="cart-item">
                <div class="item-info" onclick="removeItemFromCart(${item.id})">
                    <img src="${item.imgScr}" alt="${item.name}">
                    <h4>${item.name}</h4>
                </div>
                <div class="unit-price">
                    <small>AR$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
                </div>
            </div>
        `;
    });
}

// Remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

// Change number of units for an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if(item.id === id){
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            }else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }
        };

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}