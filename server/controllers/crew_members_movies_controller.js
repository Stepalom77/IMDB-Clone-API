const { crew_members_movies } = require('../models');

const createCrewMembersWithMovies = async (req, res) => {
    let createdCrewMembersWithMovies = null;
    try {
        createdCrewMembersWithMovies = await crew_members_movies.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdCrewMembersWithMovies);
  };

  module.exports = {
    create: createCrewMembersWithMovies,
  }