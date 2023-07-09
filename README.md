# login-js
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  code_product VARCHAR(255) UNIQUE,
  name_product VARCHAR(255),
  price INTEGER,
  is_ready BOOLEAN DEFAULT true,
  image VARCHAR(255)
);

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P001', 'Product A', 10, true, 'https://example.com/productA.jpg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P002', 'Product B', 15, true, 'https://example.com/productB.jpg');

INSERT INTO products (code_product, name_product, price, is_ready, image)
VALUES ('P003', 'Product C', 20, true, 'https://example.com/productC.jpg');
