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
router.get("/tv-episodes/get-with-genres", tvEpisodes.getAllWithGenres);
router.get("/tv-episodes/get-with-crew-members", tvEpisodes.getAllWithCrewMembers);
router.get("/tv-episodes/get-with-reviews", tvEpisodes.getAllWithReviews);
router.get("/tv-episodes/get-with-genres/:id", tvEpisodes.getWithGenres);
router.get("/tv-episodes/get-with-crew-members/:id", tvEpisodes.getWithCrewMembers);
router.get("/tv-episodes/get-with-reviews/:id", tvEpisodes.getWithReviews);

module.exports = router;