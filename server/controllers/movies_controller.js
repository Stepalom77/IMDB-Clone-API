const { movies, genres, reviews, crew_members } = require('../models');

const getMovies = async (req, res) => {
  let allMovies = [];
  try {
    allMovies = await movies.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allMovies)
}

const getMoviesWithReviews = async (req, res) => {
  let allMovies = [];
  try {
    allMovies = await movies.findAll({
      include: [{
        model: reviews
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allMovies)
}

const getMoviesWithGenres = async (req, res) => {
  let allMovies = [];
  try {
    allMovies = await movies.findAll({
      include: [{
        model: genres
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allMovies)
}

const getMoviesWithCrewMembers = async (req, res) => {
  let allMovies = [];
  try {
    allMovies = await movies.findAll({
      include: [{
        model: crew_members
      }]});
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
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
      return res.status(404).json({message: "The movie you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedMovie)
}

const getMovieWithReviews = async (req, res,) => {
  let movieId = req.params.id;
  let searchedMovie = null;
  
  try {
    searchedMovie = await movies.findOne({
      include: [{
        model: reviews,
        where: {movieId: movieId}
      }]},
      {
        where: { id: movieId}
      });
  
  }catch(error) {
    console.error(err);
    if(!searchedMovie) {
      return res.status(404).json({message: "The movie you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedMovie)
}

const getMovieWithGenres = async (req, res,) => {
  let movieId = req.params.id;
  let searchedMovie = null;
  
  try {
    searchedMovie = await movies.findOne(
      {where: { id: movieId},
        include: {
          model: genres,
          through: {attributes: []}}
      });
  
  }catch(error) {
    console.error(err);
    if(!searchedMovie) {
      return res.status(404).json({message: "The movie you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedMovie)
}

const getMovieWithCrewMembers = async (req, res,) => {
  let movieId = req.params.id;
  let searchedMovie = null;
  
  try {
    searchedMovie = await movies.findOne(
      {where: { id: movieId},
        include: {
          model: crew_members,
          through: {attributes: []}}
      });
  
  }catch(error) {
    console.error(err);
    if(!searchedMovie) {
      return res.status(404).json({message: "The movie you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
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
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(201).json(createdMovie);
}

const updateMovie = async (req, res) => {
    let movieId = req.params.id;
    let {name, rating, popularity, year, runtime, image, description} = req.body;
    let movieToUpdate = null;
    try {
      movieToUpdate = await movies.findByPk(movieId)
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
    } catch(err) {
      console.error(err);
      if(!movieToUpdate) {
        return res.status(404).json({message: 'The movie you are trying to update does not exists'})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(movieToUpdate)
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
    if (!deletedMovie) {
      return res.status(404).json({message: "The movie you are trying to delete does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(204).json({message: "The movie has been deleted"})
}

module.exports = {
  getAll: getMovies,
  getOne: getMovie,
  create: createMovie,
  getAllWithReviews: getMoviesWithReviews,
  getAllWithGenres: getMoviesWithGenres,
  getAllWithCrewMembers: getMoviesWithCrewMembers,
  getWithReviews: getMovieWithReviews,
  getWithGenres: getMovieWithGenres,
  getWithCrewMembers: getMovieWithCrewMembers,
  update: updateMovie,
  delete: deleteMovie
}