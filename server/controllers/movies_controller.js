const { movies, genres, reviews, crew_members } = require('../models');

const getMovies = async (req, res) => {
  let allMovies = [];
  try {
    allMovies = await movies.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(allMovies)
}

const getMovie = async (req, res,) => {
  let movieId = req.params.id;
  let searchedMovie = null;
  
  try {
    searchedMovie = await movies.findOne({
      where: { id: movieId}
    });
  
  }catch(error) {
    console.error(err);
    if(!searchedMovie) {
      return res.status(402).json({message: "The movie you are looking for does not exists"})
    }
    
  }

  return res.status(200).json(searchedMovie)
}

const createMovie = async (req, res) => {
  let createdMovie = null;
  try {
    createdMovie = await movies.create(req.body); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdMovie);
}

const createMovieWithReview = async (req, res) => {
  let createdMovieWithReview = null;
  try {
    createdMovieWithReview = await movies.create(req.body, {
      include: [{
        model: reviews,
        as: 'reviews'
      }]}); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdMovieWithReview);
}

const createMovieWithGenre = async (req, res) => {
  let createdMovieWithGenre = null;
  try {
    createdMovieWithGenre = await movies.create(req.body, {
      include: [{
        model: genres,
        as: 'genres'
      }]}); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdMovieWithGenre);
}

const createMovieWithCrewMember = async (req, res) => {
  let createdMovieWithCrewMember  = null;
  try {
    createdMovieWithCrewMember  = await movies.create(req.body, {
      include: [{
        model: crew_members,
        as: 'crew_members'
      }]}); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(createdMovieWithCrewMember );
}

const updateMovie = async (req, res) => {
    let movieId = req.params.id;
    let {name, rating, popularity, year, runtime, image, description} = req.body;
    try {
      let movieToUpdate = await movies.findByPk(movieId)
      movieToUpdate = await movies.update({
          name: name,
          rating: rating,
          popularity: popularity,
          year: year,
          runtime: runtime,
          image: image,
          description: description
      },
        {where: {
          id: movieId
        }
      })
      return res.status(200).json(movieToUpdate)
    } catch(err) {
      console.error(err);
      if(!movieToUpdate) {
        return res.status(404).json({message: 'The movie you are trying to update does not exists'})
      }
    }
      
    } 

const deleteMovie = async (req, res) => {
  let movieId = req.params.id;
  let deletedMovie = null;
  try {
    deletedMovie = await movies.destroy({
      where: {
        id: movieId
      }
    });
  } catch(err) {
    console.error(err);
  }
  if (!deletedMovie) {
    return res.status(404).json({message: "The movie you are trying to delete does not exists"})
  }
  return res.status(204).json({message: "The movie has been deleted"})
}

module.exports = {
  getAll: getMovies,
  getOne: getMovie,
  create: createMovie,
  createWithReview: createMovieWithReview,
  createWithGenre: createMovieWithGenre,
  createWithCrewMember: createMovieWithCrewMember,
  update: updateMovie,
  delete: deleteMovie
}