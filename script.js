// Hiệu ứng thêm vào giỏ hàng (demo)
const cartButtons = document.querySelectorAll(".add-cart-btn");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

