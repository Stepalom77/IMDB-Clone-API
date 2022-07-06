const { movies } = require('../models');

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
    searchedMovie= await movies.findOne({
      where: { id: movieId}
    });

    return res.status(200).json(searchedMovie)
  
  }catch(error) {
    
    return res.status(402).json({message: "The movie you are looking for does not exists"})
  }
}



const createMovie = async (req, res) => {
  let createdMovie = null;
  try {
    createdMovie = await movies.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'The movie already exists'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdMovie);
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
    } catch(err) {
      console.error(err);
      if(!movieToUpdate) {
        return res.status(402).json({message: 'The movie you are trying to update does not exists'})
      }
      return res.status(402).json({error: err})
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
    return res.status(402).json({ error: err })
  }
  if (!deletedMovie) {
    return res.status(402).json({message: "The movie you are trying to delete does not exists"})
  }
  return res.status(200).json({message: "The movie has been deleted"})
}

module.exports = {
  getAll: getMovies,
  getOne: getMovie,
  create: createMovie,
  update: updateMovie,
  delete: deleteMovie
}