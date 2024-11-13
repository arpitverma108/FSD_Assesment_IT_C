const pricePerItem = 15;

function updatePrice() {
    const quantity = document.getElementById("quantity").value;
    const total = pricePerItem * quantity;
    document.getElementById("total").textContent = total;
}

function buyNow() {
    const quantity = document.getElementById("quantity").value;
    const total = pricePerItem * quantity;
    alert(`You added ${quantity} items to your cart for Rs. ${total}`);
}