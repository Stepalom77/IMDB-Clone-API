'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    static associate(models) {
      genres.belongsToMany(models.tv_series, {
        through: 'tv_series_genres',
        as: 'tv_series',
        foreignKey: 'genres_id'
      });
      genres.belongsToMany(models.tv_episodes, {
        through: 'tv_episodes_genres',
        as: 'tv_episodes',
        foreignKey: 'genres_id'
      });
      genres.belongsToMany(models.movies, {
        through: 'movies_genres',
        as: 'movies',
        foreignKey: 'genres_id'
      });
    }
  }
  genres.init({
    name: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'genres',
  });
  return genres;
};