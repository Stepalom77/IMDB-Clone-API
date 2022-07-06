const { users } = require('../models');

const getUsers = async (req, res) => {
  let allUsers = [];
  try {
    allUsers = await users.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(allUsers)
}

const getUser = async (req, res,) => {
  let userId = req.params.id;
  let searchedUser = null;
  
  try {
    searchedUser= await users.findOne({
      where: { id: userId}
    });

    return res.status(200).json(searchedUser)
  
  }catch(error) {
    
    return res.status(402).json({message: "The user you are looking for does not exists"})
  }
}



const createUser = async (req, res) => {
  let createdUser = null;
  try {
    createdUser = await users.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'The user already exists'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdUser);
}

const updateUser = async (req, res) => {
    let userId = req.params.id;
    let {username, password, email, image} = req.body;
    try {
      let userToUpdate = await users.findByPk(userId)
      userToUpdate = await users.update({
          username: username,
          password: password,
          email: email,
          image: image
      },
        {where: {
          id: userId
        }
      })
    } catch(err) {
      console.error(err);
      if(!userToUpdate) {
        return res.status(402).json({message: 'The user you are trying to update does not exists'})
      }
      return res.status(402).json({error: err})
    }
      return res.status(200).json(userToUpdate)
    } 

const deleteUser = async (req, res) => {
  let userId = req.params.id;
  let deletedUser = null;
  try {
    deletedUser = await users.destroy({
      where: {
        id: userId
      }
    });
  } catch(err) {
    return res.status(402).json({ error: err })
  }
  if (!deletedUser) {
    return res.status(402).json({message: "The user you are trying to delete does not exists"})
  }
  return res.status(200).json({message: "The user has been deleted"})
}

module.exports = {
  getAll: getUsers,
  getOne: getUser,
  create: createUser,
  update: updateUser,
  delete: deleteUser
}