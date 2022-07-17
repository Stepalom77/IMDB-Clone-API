const express = require('express');
const router = express.Router();
const movies = require("../controllers/movies_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/movies", movies.getAll);
router.post("/movies", movies.create);
router.post("/movies/:id", movies.update);
router.get("/movies/:id", movies.getOne);
router.delete("/movies/:id", movies.delete);

//Advance Routes
router.post("/movie/create-reviews", movies.createWithReview);
router.post("/movie/create-with-genres", movies.createWithGenre);
router.post("/movie/create-with-crew-members", movies.createWithCrewMember);

module.exports = router;