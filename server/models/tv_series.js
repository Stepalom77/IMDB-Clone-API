'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_series extends Model {
    static associate(models) {
      tv_series.hasMany(models.tv_episodes);
      tv_series.hasMany(models.reviews);
      tv_series.belongsToMany(models.genres, {
        through: 'tv_series_genres',
        foreignKey: 'tvSeriesId'
      });
      tv_series.belongsToMany(models.crew_members, {
        through: 'crew_members_tv_series',
        foreignKey: 'tvSeriesId'
      });
    }
  }
  tv_series.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER,
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number_episodes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tv_series',
  });
  return tv_series;
};