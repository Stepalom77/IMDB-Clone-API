'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    static associate(models) {
      genres.belongsToMany(models.tv_series, {
        through: 'tv_series_genres',
        foreignKey: 'genresId'
      });
      genres.belongsToMany(models.tv_episodes, {
        through: 'tv_episodes_genres',
        foreignKey: 'genresId'
      });
      genres.belongsToMany(models.movies, {
        through: 'movies_genres',
        foreignKey: 'genresId'
      });
    }
  }
  genres.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'genres',
  });
  return genres;
};