document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Replace 'http://your-mulesoft-api-url/api/products' with your MuleSoft API endpoint
    const apiUrl = process.env.URI;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                const productItem = document.createElement("li");
                productItem.innerText = `Product: ${product.name}, Price: $${product.price}`;
                productList.appendChild(productItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching data from MuleSoft API:", error);
        });
});
/* push */
