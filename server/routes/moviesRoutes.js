const express = require('express');
const router = express.Router();
const movies = require("../controllers/movies_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/movie", movies.getAll);
router.post("/movie", movies.create);
router.post("/movie/:id", movies.update);
router.get("/movie/:id", movies.getOne);
router.delete("/movie/:id", movies.delete);

//Advance Routes
router.post("/movie/create-review", movies.createWithReview);
router.post("/movie/create-with-genre", movies.createWithGenre);
router.post("/movie/create-with-crew-member", movies.createWithCrewMember);

module.exports = router;