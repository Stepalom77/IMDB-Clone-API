const { tv_series, tv_episodes, genres, crew_members, reviews } = require('../models');

const getTvSeries = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
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
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdTvSeries);
}

const createTvSeriesWithTvEpisodes = async (req, res) => {
  let createdTvSeriesWithTvEpisodes = null;
  try {
    createdTvSeriesWithTvEpisodes = await tv_series.create(req.body, {
      include: [{model: tv_episodes,
        as: 'tv_episodes'
    }]}) 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdTvSeriesWithTvEpisodes);
}

const createTvSeriesWithReview = async (req, res) => {
  let createdTvSeriesWithReview = null;
  try {
    createdTvSeriesWithReview = await tv_series.create(req.body, {
      include: [{model: reviews,
        as: 'reviews'
    }]}) 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdTvSeriesWithReview);
}

const createTvSeriesWithGenres = async (req, res) => {
  let createdTvSeriesWithGenres = null;
  try {
    createdTvSeriesWithGenres = await tv_series.create(req.body, {
      include: [{model: genres,
        as: 'genres'
    }]}) 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdTvSeriesWithGenres);
}

const createTvSeriesWithCrewMembers = async (req, res) => {
  let createdTvSeriesWithCrewMembers = null;
  try {
    createdTvSeriesWithCrewMembers = await tv_series.create(req.body, {
      include: [{model: crew_members,
        as: 'crew_members'
    }]}) 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdTvSeriesWithCrewMembers);
}

const updateTvSeries = async (req, res) => {
    let tvSeriesId = req.params.id;
    let {name, rating, popularity, year, number_episodes, image, description} = req.body;
    try {
      let tvSeriesToUpdate = await tv_series.findByPk(tvSeriesId)
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
      return res.status(200).json(tvSeriesToUpdate)
    } catch(err) {
      console.error(err);
      if(!tvSeriesToUpdate) {
        return res.status(404).json({message: 'The tv series you are trying to update does not exists'})
      }
    }
      
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
    return res.status(404).json({ error: err })
  }
  if (!deletedTvSeries) {
    return res.status(404).json({message: "The tv series you are trying to delete does not exists"})
  }
  return res.status(200).json({message: "The tv series has been deleted"})
}

module.exports = {
  getAll: getTvSeries,
  getOne: getOneTvSeries,
  create: createTvSeries,
  createWithTvEpisodes: createTvSeriesWithTvEpisodes,
  createWithReview: createTvSeriesWithReview,
  createWithGenres: createTvSeriesWithGenres,
  createWithCrewMembers: createTvSeriesWithCrewMembers,
  update: updateTvSeries,
  delete: deleteTvSeries
}