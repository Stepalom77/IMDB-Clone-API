const { crew_members} = require('../models');

const getCrewMembers = async (req, res) => {
  let crewMember = [];
  try {
    crewMember = await crew_members.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(200).json(crewMember)
}

const getCrewMember = async (req, res) => {
  let crewMember = [];
  let crewMemberId = req.params.id;
  try {
    crewMember =  await crew_members.findAll({
      where: {
        id: crewMemberId
      } 
    });
  } catch(err) {
    console.error(err);
    if(!crewMember) {
      return res.status(404).json({message: 'The crew member you are trying to update does not exists'});
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }

  return res.status(200).json(crewMember)
}

const createCrewMember = async (req, res) => {
  let createdCrewMember = null;
  try {
    createdCrewMember = await crew_members.create(req.body); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(201).json(createdCrewMember);
}

const createCrewMemberWithRoles = async (req, res) => {
  let createdCrewMemberWithRoles = null;
  try {
    createdCrewMemberWithRoles = await crew_members.create(req.body); 
  } catch(err) {
    console.error(err);
    return res.status(400).json({ message: "There was an error" })
  }

  return res.status(201).json(createdCrewMemberWithRoles);
}

const updateCrewMember = async (req, res) => {
  let crewMemberId = req.params.id;
  let {first_name, last_name, birthday, photo} = req.body;
  let crewMemberToUpdate = null;
  try {
    crewMemberToUpdate = await crew_members.findByPk(crewMemberId)
    crewMemberToUpdate = await crew_members.update({
        first_name: first_name,
        last_name: last_name,
        birthday: birthday,
        photo: photo
    },
      {where: {
        id: crewMemberId
      }
    })
  } catch(err) {
    console.error(err);
    if(!crewMemberToUpdate) {
      return res.status(404).json({message: 'The crew member you are trying to update does not exists'})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(200).json(crewMemberToUpdate)
  } 

const deleteCrewMember = async(req, res) => {
  let crewMemberId = req.params.id;
  let crewMemberToDelete = null;
  try{
    crewMemberToDelete = await crew_members.delete({
      where: {
        id: crewMemberId
      }
    })
  } catch(err) {
    console.error(err)
    if(!crewMemberToDelete) {
      return res.status(404).json({message: 'The crew member you are trying to delete does not exists'})
    } else {
      return res.status(400).json({message: "There was an error"})
    }
  }
  return res.status(204).json({message: 'The crew member has been deleted'})
}

module.exports = {
  getAll: getCrewMembers,
  getOne: getCrewMember,
  create: createCrewMember,
  createWithRoles: createCrewMemberWithRoles,
  update: updateCrewMember,
  delete: deleteCrewMember
}