'use strict';
const {
  Model
} = require('sequelize');
const genres = require('./genres');
const movies = require('./movies');
module.exports = (sequelize, DataTypes) => {
  class movies_genres extends Model {
    static associate(models) {
    }
  }
  movies_genres.init({
    moviesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: movies,
        key: 'id'
      }
    },
    genresId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: genres,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'movies_genres',
  });
  return movies_genres;
};