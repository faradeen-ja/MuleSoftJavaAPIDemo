package resources.java;

import java.util.ArrayList;
import java.util.List;

public class ProductService {
    public List<Product> getProducts() {
        // Simulate fetching products from the e-commerce platform
        List<Product> products = new ArrayList<>();
        products.add(new Product("Product 1", 19.99));
        products.add(new Product("Product 2", 29.99));
        return products;
    }
}

class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
/* push */
