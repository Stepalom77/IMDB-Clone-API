'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tv_episodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tv_episodes.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    runtime: DataTypes.STRING,
    year: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Tv_episodes',
  });
  return Tv_episodes;
};