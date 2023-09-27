// server.js
const express = require("express");
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(__dirname + "/public"));

// Simulate API endpoint
app.get("/api/products", (req, res) => {
    const productService = new ProductService();
    const products = productService.getProducts();
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
