'use strict';
const {
  Model
} = require('sequelize');
const crew_members = require('./crew_members');
const roles = require('./roles');
module.exports = (sequelize, DataTypes) => {
  class crew_members_roles extends Model {
    static associate(models) {
    }
  }
  crew_members_roles.init({
    crewMembersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: crew_members,
        key: 'id'
      }
    },
    rolesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: roles,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'crew_members_roles',
  });
  return crew_members_roles;
};