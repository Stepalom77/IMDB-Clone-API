const express = require('express');
const router = express.Router();
const crew_members_movies = require('../controllers/crew_members_movies_controller');


router.post('/crew-members-movies', crew_members_movies.create);

module.exports = router;