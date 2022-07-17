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
    tv_series_id: DataTypes.INTEGER,
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
    modelName: 'crew_members_tv_series',
  });
  return crew_members_tv_series;
};