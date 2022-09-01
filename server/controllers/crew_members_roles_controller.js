const { crew_members_roles } = require('../models');

const createCrewMembersWithRoles = async (req, res) => {
    let createdCrewMembersWithRoles = null;
    try {
        createdCrewMembersWithRoles = await crew_members_roles.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdCrewMembersWithRoles);
  };

  module.exports = {
    create: createCrewMembersWithRoles,
  }