'use strict';
const {
  Model
} = require('sequelize');
const crew_members = require('./crew_members');
const tv_series = require('./tv_series');
module.exports = (sequelize, DataTypes) => {
  class crew_members_tv_series extends Model {
    static associate(models) {
    }
  }
  crew_members_tv_series.init({
    crewMembersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: crew_members,
        key: 'id'
      }
    },
    tvSeriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_series,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'crew_members_tv_series',
  });
  return crew_members_tv_series;
};