const { crew_members_tv_series } = require('../models');

const createCrewMembersWithTvSeries = async (req, res) => {
    let createdCrewMembersWithTvSeries = null;
    try {
        createdCrewMembersWithTvSeries = await crew_members_tv_series.create(req.body); 
    } catch(err) {
      console.error(err);
      return res.status(400).json({message: "There was an error"})
    }
    return res.status(201).json(createdCrewMembersWithTvSeries);
  };

  module.exports = {
    create: createCrewMembersWithTvSeries,
  }