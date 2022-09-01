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
router.get("/tv-series/get-with-episodes", tvSeries.getAllWithTvEpisodes);
router.get("/tv-series/get-reviews", tvSeries.getAllWithReviews);
router.get("/tv-series/get-with-genres", tvSeries.getAllWithGenres);
router.get("/tv-series/get-with-crew-members", tvSeries.getAllWithCrewMembers);
router.get("/tv-series/get-with-episodes/:id", tvSeries.getWithTvEpisodes);
router.get("/tv-series/get-with-reviews/:id", tvSeries.getWithReviews);
router.get("/tv-series/get-with-genres/:id", tvSeries.getWithGenres);
router.get("/tv-series/get-with-crew-members/:id", tvSeries.getWithCrewMembers);

module.exports = router;