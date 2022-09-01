const { tv_episodes, genres, crew_members, reviews } = require('../models');

const getTvEpisodes = async (req, res) => {
    let allTvEpisodes = [];
    try {
      allTvEpisodes = await tv_episodes.findAll()
    } catch(err) {
      console.error(err);
      return res.status(400).json({ message: "There was an error" })
    }
  
    return res.status(200).json(allTvEpisodes)
  }

  const getTvEpisodesWithReviews = async (req, res) => {
    let allTvEpisodes = [];
    try {
      allTvEpisodes = await tv_episodes.findAll({
        include: [{
          model: reviews
        }]})
    } catch(err) {
      console.error(err);
      return res.status(400).json({ message: "There was an error" })
    }
  
    return res.status(200).json(allTvEpisodes)
  }

  const getTvEpisodesWithGenres = async (req, res) => {
    let allTvEpisodes = [];
    try {
      allTvEpisodes = await tv_episodes.findAll({
        include: [{
          model: genres
        }]})
    } catch(err) {
      console.error(err);
      return res.status(400).json({ message: "There was an error" })
    }
  
    return res.status(200).json(allTvEpisodes)
  }

  const getTvEpisodesWithCrewMembers = async (req, res) => {
    let allTvEpisodes = [];
    try {
      allTvEpisodes = await tv_episodes.findAll({
        include: [{
          model: crew_members
        }]})
    } catch(err) {
      console.error(err);
      return res.status(400).json({ message: "There was an error" })
    }
  
    return res.status(200).json(allTvEpisodes)
  }
  
  const getOneTvEpisode = async (req, res,) => {
    let tvEpisodeId = req.params.id;
    let searchedTvEpisodes = null;
    
    try {
      searchedTvEpisodes = await tv_episodes.findOne({
        where: { id: tvEpisodeId}
      });
  
    }catch(error) {
      console.error(err);
      if(!searchedTvEpisodes) {
        return res.status(404).json({message: "The tv episode you are looking for does not exists"})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(searchedTvEpisodes)
  }

  const getOneTvEpisodeWithReviews = async (req, res,) => {
    let tvEpisodeId = req.params.id;
    let searchedTvEpisodes = null;
    
    try {
      searchedTvEpisodes = await tv_episodes.findOne({
        include: [{
          model: reviews,
          where: {tvEpisodeId: tvEpisodeId}
        }]},
        {
          where: { id: tvEpisodeId}
        });
  
    }catch(error) {
      console.error(err);
      if(!searchedTvEpisodes) {
        return res.status(404).json({message: "The tv episode you are looking for does not exists"})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(searchedTvEpisodes)
  }

  const getOneTvEpisodeWithGenres = async (req, res,) => {
    let tvEpisodeId = req.params.id;
    let searchedTvEpisodes = null;
    
    try {
      searchedTvEpisodes = await tv_episodes.findOne(
        {where: { id: tvEpisodeId},
          include: {
            model: genres,
            through: {attributes: []}}
        });
  
    }catch(error) {
      console.error(err);
      if(!searchedTvEpisodes) {
        return res.status(404).json({message: "The tv episode you are looking for does not exists"})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(searchedTvEpisodes)
  }

  const getOneTvEpisodeWithCrewMembers = async (req, res,) => {
    let tvEpisodeId = req.params.id;
    let searchedTvEpisodes = null;
    
    try {
      searchedTvEpisodes = await tv_episodes.findOne(
        {where: { id: tvEpisodeId},
          include: {
            model: crew_members,
            through: {attributes: []}}
        });
  
    }catch(error) {
      console.error(err);
      if(!searchedTvEpisodes) {
        return res.status(404).json({message: "The tv episode you are looking for does not exists"})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(searchedTvEpisodes)
  }
  
  const createTvEpisodes = async (req, res) => {
    let createdTvEpisodes = null;
    try {
      createdTvEpisodes = await tv_episodes.create(req.body, {
        include: [{
          model: tv_series,
          as: 'tv_series'
        }]}); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({ message: "There was an error" })
    }
  
    return res.status(201).json(createdTvEpisodes);
  }

  const updateTvEpisodes = async (req, res) => {
      let tvEpisodesId = req.params.id;
      let {name, rating, runtime, year, image, description, tvSeriesId} = req.body;
      let tvEpisodesToUpdate = null;
      try {
        tvEpisodesToUpdate = await tv_episodes.findByPk(tvEpisodesId)
        tvEpisodesToUpdate = await tv_episodes.update({
            name: name,
            rating: rating,
            runtime: runtime,
            year: year,
            image: image,
            description: description,
            tvSeriesId: tvSeriesId
        },
          {where: {
            id: tvEpisodesId
          }
        })
      } catch(err) {
        console.error(err);
        if(!tvEpisodesToUpdate) {
          return res.status(404).json({message: 'The tv episode you are trying to update does not exists'})
        } else {
          return res.status(400).json({message: "There was an error"})
        }
      }
      return res.status(200).json(tvEpisodesToUpdate) 
      } 
  
  const deleteTvEpisodes = async (req, res) => {
    let tvEpisodesId = req.params.id;
    let deletedTvEpisodes = null;
    try {
      deletedTvEpisodes = await tv_episodes.destroy({
        where: {
          id: tvEpisodesId
        }
      });
    } catch(err) {
      console.error(err)
      if (!deletedTvEpisodes) {
        return res.status(404).json({message: "The tv episode you are trying to delete does not exists"})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json({message: "The tv episode has been deleted"})
  }
  
  module.exports = {
    getAll: getTvEpisodes,
    getOne: getOneTvEpisode,
    create: createTvEpisodes,
    getAllWithReviews: getTvEpisodesWithReviews,
    getAllWithGenres: getTvEpisodesWithGenres,
    getAllWithCrewMembers: getTvEpisodesWithCrewMembers,
    getWithReviews: getOneTvEpisodeWithReviews,
    getWithGenres: getOneTvEpisodeWithGenres,
    getWithCrewMembers: getOneTvEpisodeWithCrewMembers,
    update: updateTvEpisodes,
    delete: deleteTvEpisodes
  }