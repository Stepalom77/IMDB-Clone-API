'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies_genres extends Model {
    static associate(models) {
    }
  }
  movies_genres.init({
    movies_id: DataTypes.INTEGER,
    genres_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies_genres',
  });
  return movies_genres;
};