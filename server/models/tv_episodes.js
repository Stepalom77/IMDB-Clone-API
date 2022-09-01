'use strict';
const {
  Model
} = require('sequelize');
const tv_series = require('./tv_series');
module.exports = (sequelize, DataTypes) => {
  class tv_episodes extends Model {
    static associate(models) {
      tv_episodes.hasMany(models.reviews);
      tv_episodes.belongsTo(models.tv_series, {
        foreignKey: 'tvSeriesId',
        as: 'tv_series'
      });
      tv_episodes.belongsToMany(models.genres, {
        through: 'tv_episodes_genres',
        foreignKey: 'tvEpisodesId'
      });
      tv_episodes.belongsToMany(models.crew_members, {
        through: 'crew_members_tv_episodes',
        foreignKey: 'tvEpisodesId'
      });
    }
  }
  tv_episodes.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: DataTypes.INTEGER,
    runtime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tvSeriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_series,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'tv_episodes',
  });
  return tv_episodes;
};