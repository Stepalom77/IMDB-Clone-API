'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('crew_members_tv_series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      crew_members_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'crew_members',
          key: 'id'
        }
      },
      tv_series_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tv_series',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('crew_members_tv_series');
  }
};