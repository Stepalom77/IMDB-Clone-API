'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_series extends Model {
    static associate(models) {
      tv_series.hasMany(models.tv_episodes, {
        foreignKey: 'tv_series_id',
        as: 'tv_episodes',
      });
      tv_series.hasMany(models.reviews, {
        foreignKey: 'tv_series_id',
        as: 'reviews',
      });
      tv_series.belongsToMany(models.genres, {
        through: 'tv_series_genres',
        as: 'genres',
        foreignKey: 'tv_series_id'
      });
      tv_series.belongsToMany(models.crew_members, {
        through: 'crew_members_tv_series',
        as: 'crew_members',
        foreignKey: 'tv_series_id'
      });
    }
  }
  tv_series.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    number_episodes: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
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
    modelName: 'tv_series',
  });
  return tv_series;
};