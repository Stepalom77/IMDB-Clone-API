const express = require('express');
const router = express.Router();
const tv_series_genres = require('../controllers/tv_series_genres_controller');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/tv-series-genres', authMiddleware, tv_series_genres.create);

module.exports = router;