let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    // Update cart list
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear current list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.productName + " - $" + item.price;
        cartList.appendChild(li);
    });

    // Update total price
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = "Total: $" + total.toFixed(2);
}
