'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crew_members_roles.init({
    crew_members_id: DataTypes.INTEGER,
    roles_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'crew_members_roles',
  });
  return crew_members_roles;
};