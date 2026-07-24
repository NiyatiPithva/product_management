CREATE database product_management;

use product_management;

CREATE TABLE categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100)
);

CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    quantity INT,
    category_id INT,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);
