const express = require('express');
const router = express.Router();
const crew_members_tv_episodes = require('../controllers/crew_members_tv_episodes_controller');

router.post('/crew-members-tv-episodes', crew_members_tv_episodes.create);

module.exports = router;