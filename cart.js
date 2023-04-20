const cartOverlay = document.getElementById("cart-overlay");
console.log(cartOverlay)

function toggleCart() {
    console.log(cartOverlay.style.display)
 cartOverlay.style.display = cartOverlay.style.display === "block" ? "none" : "block";
}


