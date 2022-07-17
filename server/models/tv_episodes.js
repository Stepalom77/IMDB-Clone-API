'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_episodes extends Model {
    static associate(models) {
      tv_episodes.hasMany(models.reviews, {
        foreignKey: 'tv_episodes_id',
        as: 'reviews',
      });
      tv_episodes.belongsTo(models.tv_series, {
        foreignKey: 'tv_series_id',
        as: 'tv_series'
      });
      tv_episodes.belongsToMany(models.genres, {
        through: 'tv_episodes_genres',
        as: 'genres',
        foreignKey: 'tv_episodes_id'
      });
      tv_episodes.belongsToMany(models.crew_members, {
        through: 'crew_members_tv_episodes',
        as: 'crew_members',
        foreignKey: 'tv_episodes_id'
      });
    }
  }
  tv_episodes.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    runtime: DataTypes.STRING,
    year: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    tv_series_id: DataTypes.INTEGER,
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
    modelName: 'tv_episodes',
  });
  return tv_episodes;
};