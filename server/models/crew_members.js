'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members extends Model {
    static associate(models) {
      crew_members.belongsToMany(models.tv_series, {
        through: 'crew_members_tv_series',
        as: 'tv_series',
        foreignKey: 'crew_members_id'
      });
      crew_members.belongsToMany(models.tv_episodes, {
        through: 'crew_members_tv_episodes',
        as: 'tv_episodes',
        foreignKey: 'crew_members_id'
      });
      crew_members.belongsToMany(models.movies, {
        through: 'crew_members_movies',
        as: 'movies',
        foreignKey: 'crew_members_id'
      });
      crew_members.belongsToMany(models.roles, {
        through: 'crew_members_roles',
        as: 'roles',
        foreignKey: 'crew_members_id'
      });
    }
  }
  crew_members.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'crew_members',
  });
  return crew_members;
};