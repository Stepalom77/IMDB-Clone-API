const express = require('express');
const router = express.Router();
const tvSeries = require("../controllers/tv_series_controller");

router.get("/tv-series", tvSeries.getAll);
router.post("/tv-series", tvSeries.create);
router.post("/tv-series/:id", tvSeries.update);
router.get("/tv-series/:id", tvSeries.getOne);
router.delete("/tv-series/:id", tvSeries.delete);

//Advance Routes
router.post("/tv-series/create-with-episode", tvSeries.createWithTvEpisodes);
router.post("/tv-series/create-review", tvSeries.createWithReview);
router.post("/tv-series/create-with-genre", tvSeries.createWithGenres);
router.post("/tv-series/create-with-crew-member", tvSeries.createWithCrewMembers);

module.exports = router;