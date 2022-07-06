const { roles } = require('../models');

const getRoles = async (req, res) => {
  let allRoles = [];
  try {
    allRoles = await roles.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(allRoles)
}

const getRole = async (req, res,) => {
  let roleId = req.params.id;
  let searchedRole = null;
  
  try {
    searchedRole= await roles.findOne({
      where: { id: roleId}
    });

    return res.status(200).json(searchedRole)
  
  }catch(error) {
    
    return res.status(402).json({message: "The role you are looking for does not exists"})
  }
}



const createRole = async (req, res) => {
  let createdRole = null;
  try {
    createdRole = await roles.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'The role already exists'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdRole);
}

const updateRole = async (req, res) => {
    let roleId = req.params.id;
    let {name} = req.body;
    try {
      let roleToUpdate = await roles.findByPk(roleId)
      roleToUpdate = await roles.update({
          name: name
      },
        {where: {
          id: roleId
        }
      })
    } catch(err) {
      console.error(err);
      if(!roleToUpdate) {
        return res.status(402).json({message: 'The role you are trying to update does not exists'})
      }
      return res.status(402).json({error: err})
    }
      return res.status(200).json(roleToUpdate)
    } 

const deleteRole = async (req, res) => {
  let roleId = req.params.id;
  let deletedRole = null;
  try {
    deletedRole = await roles.destroy({
      where: {
        id: roleId
      }
    });
  } catch(err) {
    return res.status(402).json({ error: err })
  }
  if (!deletedRole) {
    return res.status(402).json({message: "The role you are trying to delete does not exists"})
  }
  return res.status(200).json({message: "The role has been deleted"})
}

module.exports = {
  getAll: deleteRole,
  getOne: updateRole,
  create: createRole,
  update: getRole,
  delete: getRoles
}