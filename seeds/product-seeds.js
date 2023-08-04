const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 1000.00,
    stock: 15,
    category_id: 1,
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
