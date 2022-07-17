const express = require('express');
const router = express.Router();
const tvEpisodes = require("../controllers/tv_episodes_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/tv-episode", tvEpisodes.getAll);
router.post("/tv-episode", tvEpisodes.create);
router.post("/tv-episode/:id", tvEpisodes.update);
router.get("/tv-episode/:id", tvEpisodes.getOne);
router.delete("/tv-episode/:id", tvEpisodes.delete);

//Advance Routes
router.post("/tv-episode/create-with-genre", tvEpisodes.createWithGenres);
router.post("/tv-episode/create-with-crew-member", tvEpisodes.createWithCrewMembers);

module.exports = router;