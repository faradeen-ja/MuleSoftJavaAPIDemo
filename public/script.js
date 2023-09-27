document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Replace 'http://your-mulesoft-api-url/api/products' with your MuleSoft API endpoint
    const apiUrl = "https://anypoint.mulesoft.com/exchange/0f675801-3c11-4aca-acbf-f9fd38abd3cd/productapi/1.0.0";

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
