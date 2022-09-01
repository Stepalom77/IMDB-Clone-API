const { movies_genres } = require('../models');

const createMoviesWithGenres = async (req, res) => {
    let createdMoviesWithGenres = null;
    try {
        createdMoviesWithGenres = await movies_genres.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdMoviesWithGenres);
  };

  module.exports = {
    create: createMoviesWithGenres,
  }