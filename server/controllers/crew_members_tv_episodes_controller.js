const { crew_members_tv_episodes } = require('../models');

const createCrewMembersWithTvEpisodes = async (req, res) => {
    let createdCrewMembersWithTvEpisodes = null;
    try {
        createdCrewMembersWithTvEpisodes = await crew_members_tv_episodes.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdCrewMembersWithTvEpisodes);
  };

  module.exports = {
    create: createCrewMembersWithTvEpisodes,
  }