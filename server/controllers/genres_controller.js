const { genres } = require('../models');

const getGenres = async (req, res) => {
  let allGenres = [];
  try {
    allGenres = await genres.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
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

    return res.status(200).json(searchedGenre)
  
  }catch(error) {
    
    return res.status(402).json({message: "The genre you are looking for does not exists"})
  }
}



const createGenre = async (req, res) => {
  let createdGenre = null;
  try {
    createdGenre = await genres.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'The genre already exists'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdGenre);
}

const updateGenre = async (req, res) => {
    let genreId = req.params.id;
    let {name} = req.body;
    try {
      let genreToUpdate = await genres.findByPk(genreId)
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
        return res.status(402).json({message: 'The genre you are trying to update does not exists'})
      }
      return res.status(402).json({error: err})
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
    return res.status(402).json({ error: err })
  }
  if (!deletedGenre) {
    return res.status(402).json({message: "The genre you are trying to delete does not exists"})
  }
  return res.status(200).json({message: "The genre has been deleted"})
}

module.exports = {
  getAll: getGenres,
  getOne: getGenre,
  create: createGenre,
  update: updateGenre,
  delete: deleteGenre
}