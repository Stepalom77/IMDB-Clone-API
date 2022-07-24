'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew_members_tv_series extends Model {
    static associate(models) {
    }
  }
  crew_members_tv_series.init({
    crew_members_id: DataTypes.INTEGER,
    tv_series_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'crew_members_tv_series',
  });
  return crew_members_tv_series;
};