const express = require('express');
const router = express.Router();
const tvEpisodes = require("../controllers/tv_episodes_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/tv-episodes", tvEpisodes.getAll);
router.post("/tv-episodes", tvEpisodes.create);
router.post("/tv-episodes/:id", tvEpisodes.update);
router.get("/tv-episodes/:id", tvEpisodes.getOne);
router.delete("/tv-episodes/:id", tvEpisodes.delete);

//Advance Routes
router.post("/tv-episodes/create-with-genres", tvEpisodes.createWithGenres);
router.post("/tv-episodes/create-with-crew-members", tvEpisodes.createWithCrewMembers);

module.exports = router;