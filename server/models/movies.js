'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    static associate(models) {
      movies.belongsToMany(models.genres, {
        through: 'movies_genres',
        as: 'genres',
        foreignKey: 'movies_id'
      });
      movies.belongsToMany(models.crew_members, {
        through: 'movies_genres',
        as: 'crew_members_movies',
        foreignKey: 'movies_id'
      });
      movies.hasMany(models.reviews, {
        foreignKey: 'movies_id',
        as: 'reviews',
      });
    }
  }
  movies.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER,
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    runtime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};