const { tv_series, tv_episodes, genres, crew_members } = require('../models');

const getTvSeries = async (req, res) => {
  let allTvSeries = [];
  try {
    allTvSeries = await tv_series.findAll({
      include: [{
        model: tv_episodes,
        as: 'tv_episode'
      }, {
        model: genres,
        as: 'genre'
      }, {
        model: crew_members,
        as: 'crew_member'
      }]});
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
    }, {
      include: [{
        model: tv_episodes,
        as: 'tv_episode'
      }, {
        model: genres,
        as: 'genre'
      }, {
        model: crew_members,
        as: 'crew_member'
      }]});

    return res.status(200).json(searchedTvSeries)
  
  }catch(error) {
    
    return res.status(402).json({message: "The tv series you are looking for does not exists"})
  }
}

const createTvSeries = async (req, res) => {
  let createdTvSeries = null;
  try {
    createdTvSeries = await tv_series.create(req.body); 
  } catch(err) {
    console.error(err);
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdTvSeries);
}

const updateTvSeries = async (req, res) => {
    let tvSeriesId = req.params.id;
    let {name, rating, popularity, year, number_episodes, image, description} = req.body;
    try {
      let tvSeriesToUpdate = await tv_series.findByPk(tvSeriesId, {
        include: [{
          model: tv_episodes,
          as: 'tv_episode'
        }, {
          model: genres,
          as: 'genre'
        }, {
          model: crew_members,
          as: 'crew_member'
        }]})
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
        return res.status(402).json({message: 'The tv series you are trying to update does not exists'})
      }
      return res.status(402).json({error: err})
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
    return res.status(402).json({ error: err })
  }
  if (!deletedTvSeries) {
    return res.status(402).json({message: "The tv series you are trying to delete does not exists"})
  }
  return res.status(200).json({message: "The tv series has been deleted"})
}

module.exports = {
  getAll: getTvSeries,
  getOne: getOneTvSeries,
  create: createTvSeries,
  update: updateTvSeries,
  delete: deleteTvSeries
}