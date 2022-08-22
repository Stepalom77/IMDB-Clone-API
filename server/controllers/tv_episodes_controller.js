const { tv_episodes, tv_series, genres, crew_members } = require('../models');

const getTvEpisodes = async (req, res) => {
    let allTvEpisodes = [];
    try {
      allTvEpisodes = await tv_episodes.findAll()
    } catch(err) {
      console.error(err);
      return res.status(400).json({ error: err })
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
      return res.status(400).json({ error: err })
    }
  
    return res.status(201).json(createdTvEpisodes);
  }

  const createTvEpisodesWithGenres = async (req, res) => {
    let createdTvEpisodesWithGenres = null;
    try {
      createdTvEpisodesWithGenres = await tv_episodes.create(req.body, {
        include: [{
            model: genres,
            as: 'genres'
          }]}); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({ error: err })
    }
  
    return res.status(201).json(createdTvEpisodesWithGenres);
  }
  
  const createTvEpisodesWithCrewMembers = async (req, res) => {
    let createdTvEpisodesWithCrewMembers = null;
    try {
      createdTvEpisodesWithCrewMembers = await tv_episodes.create(req.body, {
        include: [{
            model: crew_members,
            as: 'crew_member'
          }]}); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({ error: err })
    }
  
    return res.status(201).json(createdTvEpisodesWithCrewMembers);
  }
  const updateTvEpisodes = async (req, res) => {
      let tvEpisodesId = req.params.id;
      let {name, rating, runtime, year, image, description, tv_series_id} = req.body;
      try {
        let tvEpisodesToUpdate = await tv_episodes.findByPk(tvEpisodesId)
          tvEpisodesToUpdate = await tv_episodes.update({
            name: name,
            rating: rating,
            runtime: runtime,
            year: year,
            image: image,
            description: description,
            tv_series_id: tv_series_id
        },
          {where: {
            id: tvEpisodesId
          }
        })
        return res.status(200).json(tvEpisodesToUpdate)
      } catch(err) {
        console.error(err);
        if(!tvEpisodesToUpdate) {
          return res.status(404).json({message: 'The tv episode you are trying to update does not exists'})
        }
      }
        
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
      return res.status(404).json({ error: err })
    }
    if (!deletedTvEpisodes) {
      return res.status(404).json({message: "The tv episode you are trying to delete does not exists"})
    }
    return res.status(200).json({message: "The tv episode has been deleted"})
  }
  
  module.exports = {
    getAll: getTvEpisodes,
    getOne: getOneTvEpisode,
    create: createTvEpisodes,
    createWithGenres: createTvEpisodesWithGenres,
    createWithCrewMembers: createTvEpisodesWithCrewMembers,
    update: updateTvEpisodes,
    delete: deleteTvEpisodes
  }