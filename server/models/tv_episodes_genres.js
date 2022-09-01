'use strict';
const {
  Model
} = require('sequelize');
const genres = require('./genres');
const tv_episodes = require('./tv_episodes');
module.exports = (sequelize, DataTypes) => {
  class tv_episodes_genres extends Model {
    static associate(models) {
    }
  }
  tv_episodes_genres.init({
    tvEpisodesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_episodes,
        key: 'id'
      }
    },
    genresId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: genres,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'tv_episodes_genres',
  });
  return tv_episodes_genres;
};