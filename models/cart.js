'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cart.init(
    {
    productId: {
      type: DataTypes.INTEGER,
      references:{
        model:'products',
        ket:'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references:{
        model: 'users',
        key:'id'
      }
    }
  }, 
    {
    sequelize,
    modelName: 'cart',
    });
  return cart;
};