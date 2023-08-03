const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'ProductTag',
  }
);

module.exports = ProductTag;
