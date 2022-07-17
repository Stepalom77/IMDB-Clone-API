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
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    photo: DataTypes.STRING,
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
    modelName: 'crew_members',
  });
  return crew_members;
};