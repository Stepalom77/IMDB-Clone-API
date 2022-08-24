const argon2 = require('argon2');
const { users, reviews } = require('../models');

const getUsers = async (req, res) => {
  let allUsers = [];
  try {
    allUsers = await users.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
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
  
  }catch(error) {
    console.error(err);
    if(!searchedUser) {
      return res.status(404).json({message: "The user you are looking for does not exists"})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
    
  }
  return res.status(200).json(searchedUser);
}



const createUser = async (req, res) => {
  let {password, email} = req.body;
  let hash = null;
  try {
     hash = await argon2.hash(password);
  } catch (err) {
    console.log(`There was an error with encription the password of the user ${req.body.email}`)
    console.error(err);
  }
  let createdUser = null;
  try {
    createdUser = await users.create({
      ...req.body,
      password:hash
  }); 
  } catch(err) {
    console.error(err);
    if  (err.username === 'SequelizeUniqueConstraintError' || err.email === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'The user already exists'});
    }
    return res.status(201).json(createdUser);
  }

  return res.status(200).json(createdUser);
}

const createUserWithReview = async (req, res) => {
  let {password, email} = req.body;
  let hash = null;
  try {
     hash = await argon2.hash(password);
  } catch (err) {
    console.log(`There was an error with encription the password of the user ${req.body.email}`)
    console.error(err);
  }
  let createdUserWithReview = null;
  try {
    createdUserWithReview = await users.create({
      ...req.body,
      password:hash
  }, {
      include: [{
        model: reviews,
        as: 'reviews'
      }]}); 
  } catch(err) {
    console.error(err);
    if  (err.username === 'SequelizeUniqueConstraintError' || err.email === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'The user already exists'});
    }
    return res.status(201).json(createdUserWithReview);
  }

  return res.status(200).json(createdUserWithReview);
}
const updateUser = async (req, res) => {
    let userId = req.params.id;
    let {username, password, email, image} = req.body;
    let userToUpdate = null;
    try {
      userToUpdate = await users.findByPk(userId)
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
        return res.status(404).json({message: 'The user you are trying to update does not exists'})
      } else {
      return res.status(400).json({message: "There was an error"})
      }
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
    console.error(err)
    if (!deletedUser) {
      return res.status(404).json({message: "The user you are trying to delete does not exists"})
    }
    return res.status(200).json(userToUpdate)
  }
  return res.status(204).json({message: "The user has been deleted"})
}

module.exports = {
  getAll: getUsers,
  getOne: getUser,
  create: createUser,
  createWithReview: createUserWithReview,
  update: updateUser,
  delete: deleteUser
}