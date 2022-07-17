'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members_tv_episodes extends Model {
    static associate(models) {
    }
  }
  crew_members_tv_episodes.init({
    crew_members_id: DataTypes.INTEGER,
    tv_episodes_id: DataTypes.INTEGER,
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
    modelName: 'crew_members_tv_episodes',
  });
  return crew_members_tv_episodes;
};