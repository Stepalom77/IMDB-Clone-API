'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    static associate(models) {
      reviews.belongsTo(models.users, {
        foreignKey: 'users_id',
        as: 'users'
      });
      reviews.belongsTo(models.tv_episodes, {
        foreignKey: 'tv_episodes_id',
        as: 'tv_episodes'
      });
      reviews.belongsTo(models.movies, {
        foreignKey: 'movies_id',
        as: 'movies'
      });
      reviews.belongsTo(models.tv_series, {
        foreignKey: 'tv_series_id',
        as: 'tv_series'
      });
    }
  }
  reviews.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    number_upvotes: DataTypes.INTEGER,
    number_downvotes: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    movies_id: DataTypes.INTEGER,
    tv_episodes_id: DataTypes.INTEGER,
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
    modelName: 'reviews',
  });
  return reviews;
};