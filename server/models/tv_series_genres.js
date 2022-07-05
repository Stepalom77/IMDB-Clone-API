'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_series_genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tv_series_genres.init({
    tv_series_id: DataTypes.INTEGER,
    genres_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tv_series_genres',
  });
  return tv_series_genres;
};