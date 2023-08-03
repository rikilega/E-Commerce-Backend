const { Product } = require('../models');

const productData = [
  { product_name: 'Laptop', price: 800.99, stock: 10, category_id: 1 },
  { product_name: 'Shirt', price: 20.00, stock: 40, category_id: 2 },
  { product_name: 'Book', price: 15.00, stock: 25, category_id: 3 },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
