'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members_movies extends Model {
    static associate(models) {
    }
  }
  crew_members_movies.init({
    crew_members_id: DataTypes.INTEGER,
    movies_id: DataTypes.INTEGER,
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
    modelName: 'crew_members_movies',
  });
  return crew_members_movies;
};