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
        foreignKey: 'usersId',
        as: 'users'
      });
      reviews.belongsTo(models.tv_episodes, {
        foreignKey: 'tvEpisodesId',
        as: 'tv_episodes'
      });
      reviews.belongsTo(models.movies, {
        foreignKey: 'moviesId',
        as: 'movies'
      });
      reviews.belongsTo(models.tv_series, {
        foreignKey: 'tvSeriesId',
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
    usersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: users,
        key: 'id'
      }
    },
    moviesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: movies,
        key: 'id'
      }
    },
    tvEpisodesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_episodes,
        key: 'id'
      }
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
    modelName: 'reviews',
  });
  return reviews;
};