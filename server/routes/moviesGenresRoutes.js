const express = require('express');
const router = express.Router();
const movies_genres = require('../controllers/movies_genres_controller');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/movies-genres', authMiddleware, movies_genres.create);

module.exports = router;