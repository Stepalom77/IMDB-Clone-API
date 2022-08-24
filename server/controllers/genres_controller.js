const { genres} = require('../models');

const getGenres = async (req, res) => {
  let allGenres = [];
  try {
    allGenres = await genres.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(allGenres)
}

const getGenre = async (req, res,) => {
  let genreId = req.params.id;
  let searchedGenre = null;
  
  try {
    searchedGenre= await genres.findOne({
      where: { id: genreId}
    });
  
  }catch(error) {
    console.error(err);
    if(!searchedGenre) {
      return res.status(404).json({message: "The genre you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(searchedGenre);
}



const createGenre = async (req, res) => {
  let createdGenre = null;
  try {
    createdGenre = await genres.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'The genre already exists'});
    }
  }

  return res.status(201).json(createdGenre);
}

const updateGenre = async (req, res) => {
    let genreId = req.params.id;
    let {name} = req.body;
    let genreToUpdate = null;
    try {
      genreToUpdate = await genres.findByPk(genreId)
      genreToUpdate = await genres.update({
          name: name
      },
        {where: {
          id: genreId
        }
      })
    } catch(err) {
      console.error(err);
      if(!genreToUpdate) {
        return res.status(404).json({message: 'The genre you are trying to update does not exists'})
      } else {
        return res.status(400).json({message: "There was an error"})
      }
    }
    return res.status(200).json(genreToUpdate)
    } 

const deleteGenre = async (req, res) => {
  let genreId = req.params.id;
  let deletedGenre = null;
  try {
    deletedGenre = await genres.destroy({
      where: {
        id: genreId
      }
    });
  } catch(err) {
    console.error(err);
    if (!deletedGenre) {
      return res.status(404).json({message: "The genre you are trying to delete does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(204).json({message: "The genre has been deleted"})
}

module.exports = {
  getAll: getGenres,
  getOne: getGenre,
  create: createGenre,
  update: updateGenre,
  delete: deleteGenre
}