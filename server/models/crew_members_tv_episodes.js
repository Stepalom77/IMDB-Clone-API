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
    tv_episodes_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'crew_members_tv_episodes',
  });
  return crew_members_tv_episodes;
};