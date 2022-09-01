const express = require('express');
const router = express.Router();
const tv_episodes_genres = require('../controllers/tv_episodes_genres_controller');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/tv-episodes-genres', authMiddleware, tv_episodes_genres.create);

module.exports = router;