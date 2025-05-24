document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartList = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
  
    function updateCart() {
      cartList.innerHTML = cartItems
        .map((item) => `<li>${item.name} - $${item.price}</li>`)
        .join("");
      const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
      totalPriceEl.textContent = totalPrice.toFixed(2);
    }
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productEl = e.target.closest(".product");
        const name = productEl.querySelector("h3").textContent;
        const price = parseFloat(productEl.dataset.price);
        cartItems.push({ name, price });
        updateCart();
      });
    });
  
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been sent!");
      e.target.reset();
    });
  });
  