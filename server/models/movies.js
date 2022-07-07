'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    static associate(models) {
      movies.belongsToMany(models.genres, {
        through: 'movies_genres',
        as: 'genres',
        foreignKey: 'movies_id'
      });
      movies.hasMany(models.reviews, {
        foreignKey: 'movies_id',
        as: 'reviews',
      });
    }
  }
  movies.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    runtime: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};