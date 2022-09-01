'use strict';
const {
  Model
} = require('sequelize');
const crew_members = require('./crew_members');
const movies = require('./movies');
module.exports = (sequelize, DataTypes) => {
  class crew_members_movies extends Model {
    static associate(models) {
    }
  }
  crew_members_movies.init({
    crewMembersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: crew_members,
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
    }
  }, {
    sequelize,
    modelName: 'crew_members_movies',
  });
  return crew_members_movies;
};