'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.belongsToMany(models.crew_members, {
        through: 'crew_members_roles',
        foreignKey: 'rolesId'
      });
    }
  }
  roles.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};
