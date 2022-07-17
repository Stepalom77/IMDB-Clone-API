'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_episodes_genres extends Model {
    static associate(models) {
    }
  }
  tv_episodes_genres.init({
    tv_episodes_id: DataTypes.INTEGER,
    genres_id: DataTypes.INTEGER,
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
    modelName: 'tv_episodes_genres',
  });
  return tv_episodes_genres;
};