const { tv_series, tv_episodes, genres, crew_members, reviews } = require('../models');

const getTvSeries = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allTvSeries)
}

const getTvSeriesWithTvEpisodes = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll({
      include: [{
        model: tv_episodes
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allTvSeries)
}

const getTvSeriesWithReviews = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll({
      include: [{
        model: reviews
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allTvSeries)
}

const getTvSeriesWithGenres = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll({
      include: [{
        model: genres
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allTvSeries)
}

const getTvSeriesWithCrewMembers = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll({
      include: [{
        model: crew_members
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allTvSeries)
}

const getOneTvSeries = async (req, res,) => {
  let tvSeriesId = req.params.id;
  let searchedTvSeries = null;
  
  try {
    searchedTvSeries= await tv_series.findOne({
      where: { id: tvSeriesId}
    });

  }catch(error) {
    console.error(err);
    if(!searchedTvSeries) {
      return res.status(404).json({message: "The tv series you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedTvSeries)
}

const getOneTvSeriesWithTvEpisodes = async (req, res,) => {
  let tvSeriesId = req.params.id;
  let searchedTvSeries = null;
  
  try {
    searchedTvSeries= await tv_series.findOne({
      include: [{
        model: tv_episodes,
        where: {tvSeriesId: tvSeriesId}
      }]},
      {
        where: { id: tvSeriesId}
      });
  }catch(error) {
    console.error(err);
    if(!searchedTvSeries) {
      return res.status(404).json({message: "The tv series you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedTvSeries)
}

const getOneTvSeriesWithReviews = async (req, res,) => {
  let tvSeriesId = req.params.id;
  let searchedTvSeries = null;
  
  try {
    searchedTvSeries= await tv_series.findOne({
      include: [{
        model: reviews,
        where: {tvSeriesId: tvSeriesId}
      }]},
      {
        where: { id: tvSeriesId}
      });
  }catch(error) {
    console.error(err);
    if(!searchedTvSeries) {
      return res.status(404).json({message: "The tv series you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedTvSeries)
}

const getOneTvSeriesWithGenres = async (req, res,) => {
  let tvSeriesId = req.params.id;
  let searchedTvSeries = null;
  
  try {
    searchedTvSeries= await tv_series.findOne(
      {where: { id: tvSeriesId},
        include: {
          model: genres,
          through: {attributes: []}}
      });
  }catch(error) {
    console.error(err);
    if(!searchedTvSeries) {
      return res.status(404).json({message: "The tv series you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedTvSeries)
}

const getOneTvSeriesWithCrewMembers = async (req, res,) => {
  let tvSeriesId = req.params.id;
  let searchedTvSeries = null;
  
  try {
    searchedTvSeries= await tv_series.findOne(
      {where: { id: tvSeriesId},
        include: {
          model: crew_members,
          through: {attributes: []}}
      });
  }catch(error) {
    console.error(err);
    if(!searchedTvSeries) {
      return res.status(404).json({message: "The tv series you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedTvSeries)
}

const createTvSeries = async (req, res) => {
  let createdTvSeries = null;
  try {
    createdTvSeries = await tv_series.create(req.body); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(201).json(createdTvSeries);
}

const updateTvSeries = async (req, res) => {
    let tvSeriesId = req.params.id;
    let {name, rating, popularity, year, number_episodes, image, description} = req.body;
    let tvSeriesToUpdate = null;
    try {
      tvSeriesToUpdate = await tv_series.findByPk(tvSeriesId)
      tvSeriesToUpdate = await tv_series.update({
          name: name,
          rating: rating,
          popularity: popularity,
          year: year,
          number_episodes: number_episodes,
          image: image,
          description: description
      },
        {where: {
          id: tvSeriesId
        }
      })
    } catch(err) {
      console.error(err);
      if(!tvSeriesToUpdate) {
        return res.status(404).json({message: 'The tv series you are trying to update does not exists'})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(tvSeriesToUpdate)
    } 

const deleteTvSeries = async (req, res) => {
  let tvSeriesId = req.params.id;
  let deletedTvSeries = null;
  try {
    deletedTvSeries = await tv_series.destroy({
      where: {
        id: tvSeriesId
      }
    });
  } catch(err) {
    console.error(err)
    if (!deletedTvSeries) {
      return res.status(404).json({message: "The tv series you are trying to delete does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json({message: "The tv series has been deleted"})
}

module.exports = {
  getAll: getTvSeries,
  getOne: getOneTvSeries,
  create: createTvSeries,
  getAllWithTvEpisodes: getTvSeriesWithTvEpisodes,
  getAllWithReviews: getTvSeriesWithReviews,
  getAllWithGenres: getTvSeriesWithGenres,
  getAllWithCrewMembers: getTvSeriesWithCrewMembers,
  getWithTvEpisodes: getOneTvSeriesWithTvEpisodes,
  getWithReviews: getOneTvSeriesWithReviews,
  getWithGenres: getOneTvSeriesWithGenres,
  getWithCrewMembers: getOneTvSeriesWithCrewMembers,
  update: updateTvSeries,
  delete: deleteTvSeries
}