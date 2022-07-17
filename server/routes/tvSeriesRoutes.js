const express = require('express');
const router = express.Router();
const tvSeries = require("../controllers/tv_series_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/tv-series", tvSeries.getAll);
router.post("/tv-series", tvSeries.create);
router.post("/tv-series/:id", tvSeries.update);
router.get("/tv-series/:id", tvSeries.getOne);
router.delete("/tv-series/:id", tvSeries.delete);

//Advance Routes
router.post("/tv-series/create-with-episodes", tvSeries.createWithTvEpisodes);
router.post("/tv-series/create-reviews", tvSeries.createWithReview);
router.post("/tv-series/create-with-genres", tvSeries.createWithGenres);
router.post("/tv-series/create-with-crew-members", tvSeries.createWithCrewMembers);

module.exports = router;