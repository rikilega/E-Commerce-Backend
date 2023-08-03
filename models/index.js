const Sequelize = require('sequelize');
const envConfigs = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations

// Products belong to Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belong to many Tags
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belong to many Products
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  sequelize,
  Category,
  Product,
  Tag,
  ProductTag,
};
