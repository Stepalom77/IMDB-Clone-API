'use strict';
const {
  Model
} = require('sequelize');
const crew_members = require('./crew_members');
const tv_episodes = require('./tv_episodes');
module.exports = (sequelize, DataTypes) => {
  class crew_members_tv_episodes extends Model {
    static associate(models) {
    }
  }
  crew_members_tv_episodes.init({
    crewMembersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: crew_members,
        key: 'id'
      }
    },
    tvEpisodesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tv_episodes,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'crew_members_tv_episodes',
  });
  return crew_members_tv_episodes;
};