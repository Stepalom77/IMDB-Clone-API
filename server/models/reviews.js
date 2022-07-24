'use strict';
const {
  Model
} = require('sequelize');
const movies = require('./movies');
const tv_episodes = require('./tv_episodes');
const users = require('./users');
const tv_series = require('./tv_series');
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number_upvotes: DataTypes.INTEGER,
    number_downvotes: DataTypes.INTEGER,
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: users,
        key: 'id'
      }
    },
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: movies,
        key: 'id'
      }
    },
    tv_episodes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_episodes,
        key: 'id'
      }
    },
    tv_series_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_series,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};