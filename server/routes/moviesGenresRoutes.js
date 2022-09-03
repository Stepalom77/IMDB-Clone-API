const express = require('express');
const router = express.Router();
const movies_genres = require('../controllers/movies_genres_controller');

router.post('/movies-genres', movies_genres.create);

module.exports = router;