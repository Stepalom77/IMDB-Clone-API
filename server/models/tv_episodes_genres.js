'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tv_episodes_genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tv_episodes_genres.init({
    tv_episodes_id: DataTypes.INTEGER,
    genres_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tv_episodes_genres',
  });
  return tv_episodes_genres;
};