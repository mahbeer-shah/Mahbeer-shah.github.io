// Add to Cart

let cart = 0;

const buttons = document.querySelectorAll(".card button");
const cartLink = document.querySelector(".icons a:last-child");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartLink.innerHTML = `Cart (${cart})`;
        alert("Product added to cart!");
    });
});

// Search Products

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const products = document.querySelectorAll(".card");

searchButton.addEventListener("click", searchProducts);

searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchProducts();
    }
});

function searchProducts() {

    const value = searchInput.value.toLowerCase();

    products.forEach(product => {

        const title = product.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}