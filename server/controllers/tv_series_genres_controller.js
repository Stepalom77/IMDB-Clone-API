const { tv_series_genres } = require('../models');

const createTvSeriesWithGenres = async (req, res) => {
    let createdTvSeriesWithGenres = null;
    try {
        createdTvSeriesWithGenres = await tv_series_genres.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdTvSeriesWithGenres);
  };

  module.exports = {
    create: createTvSeriesWithGenres,
  }