'use strict';
const {
  Model
} = require('sequelize');
const tv_series = require('./tv_series');
const genres = require('./genres');
module.exports = (sequelize, DataTypes) => {
  class tv_series_genres extends Model {
    static associate(models) {
    }
  }
  tv_series_genres.init({
    tvSeriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_series,
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
    modelName: 'tv_series_genres',
  });
  return tv_series_genres;
};