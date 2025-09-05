let cartCount = 0;

document.addEventListener('DOMContentLoaded', function() {
  const addBtn = document.getElementById('add-to-cart');
  const cartCountEl = document.getElementById('cart-count');
  const yearEl = document.getElementById('year');

  addBtn.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    alert('Added to cart!');
  });

  yearEl.textContent = new Date().getFullYear();
});
