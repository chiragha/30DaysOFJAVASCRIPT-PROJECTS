// script.js
const products = document.querySelectorAll('.product');

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

     //after exceeds 3 letters

    products.forEach(product => {
        const productName = product.innerText.toLowerCase();
        if (productName.includes(searchInput) && searchInput.length >= 4) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });


   

    if (searchInput.length === 0) {
        products.forEach(product => {
            product.style.display = 'block';
        });
    }
}
