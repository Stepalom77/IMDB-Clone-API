const { tv_episodes_genres } = require('../models');

const createTvEpisodesWithGenres = async (req, res) => {
    let createdTvEpisodesWithGenres = null;
    try {
        createdTvEpisodesWithGenres = await tv_episodes_genres.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdTvEpisodesWithGenres);
  };

  module.exports = {
    create: createTvEpisodesWithGenres,
  }