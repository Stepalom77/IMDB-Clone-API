'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.belongsToMany(models.crew_members, {
        through: 'crew_members_roles',
        as: 'crew_members',
        foreignKey: 'roles_id'
      });
    }
  }
  roles.init({
    name: DataTypes.STRING,
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
    modelName: 'roles',
  });
  return roles;
};
