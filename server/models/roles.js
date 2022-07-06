const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    name: {
      name: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    // Other model options go here
  });
  return roles;
}