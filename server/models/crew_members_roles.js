'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members_roles extends Model {
    static associate(models) {
    }
  }
  crew_members_roles.init({
    crew_members_id: DataTypes.INTEGER,
    roles_id: DataTypes.INTEGER,
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
    modelName: 'crew_members_roles',
  });
  return crew_members_roles;
};