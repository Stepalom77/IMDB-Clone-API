const express = require('express');
const router = express.Router();
const tv_episodes_genres = require('../controllers/tv_episodes_genres_controller');

router.post('/tv-episodes-genres', tv_episodes_genres.create);

module.exports = router;