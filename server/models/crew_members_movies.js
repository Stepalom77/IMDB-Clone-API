'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members_movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crew_members_movies.init({
    crew_members_id: DataTypes.INTEGER,
    movies_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'crew_members_movies',
  });
  return crew_members_movies;
};