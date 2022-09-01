'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    static associate(models) {
      movies.belongsToMany(models.genres, {
        through: 'movies_genres',
        foreignKey: 'moviesId'
      });
      movies.belongsToMany(models.crew_members, {
        through: 'crew_members_movies',
        foreignKey: 'moviesId'
      });
      movies.hasMany(models.reviews);
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