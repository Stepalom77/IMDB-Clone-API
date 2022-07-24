'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_series_genres extends Model {
    static associate(models) {
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