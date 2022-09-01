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
router.get("/movie/get-with-reviews", movies.getAllWithReviews);
router.get("/movie/get-with-genres", movies.getAllWithGenres);
router.get("/movie/get-with-crew-members", movies.getAllWithCrewMembers);
router.get("/movie/get-with-reviews/:id", movies.getWithReviews);
router.get("/movie/get-with-genres/:id", movies.getWithGenres);
router.get("/movie/get-with-crew-members/:id", movies.getWithCrewMembers);

module.exports = router;