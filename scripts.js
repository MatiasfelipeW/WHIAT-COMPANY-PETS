// Simple Cart Functionality
const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});




