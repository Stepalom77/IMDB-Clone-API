'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tv_series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tv_series.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    number_episodes: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Tv_series',
  });
  return Tv_series;
};