'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      number_upvotes: {
        type: Sequelize.INTEGER
      },
      number_downvotes: {
        type: Sequelize.INTEGER
      },
      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      movies_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'movies',
          key: 'id'
        }
      },
      tv_episodes_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tv_episodes',
          key: 'id'
        }
      },
      tv_series_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tv_series',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};