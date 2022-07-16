
const express = require("express");
const router = express.Router();

const users = require("../controllers/users_controller");
const crewMembers = require("../controllers/crew_members_controller");
const movies = require("../controllers/movies_controller");
const tvSeries = require("../controllers/tv_series_controller");
const tvEpisodes = require("../controllers/tv_episodes_controller");
const genres = require("../controllers/genres_controller");
const roles = require("../controllers/roles_controller");
const reviews = require("../controllers/reviews_controller");

router.get('/user', users.getAll);
router.post('/user', users.create);
router.post('/user/:id', users.update);
router.get('/user/:id', users.getOne);
router.delete('/user/:id', users.delete);

router.get("/crew-member", crewMembers.getAll);
router.post("/crew-member", crewMembers.create);
router.post("/crew-member/:id", crewMembers.update);
router.get("/crew-member/:id", crewMembers.getOne);
router.delete("/crew-member/:id", crewMembers.delete);

router.get("/movie", movies.getAll);
router.post("/movie", movies.create);
router.post("/movie/:id", movies.update);
router.get("/movie/:id", movies.getOne);
router.delete("/movie/:id", movies.delete);

router.get("/tv-series", tvSeries.getAll);
router.post("/tv-series", tvSeries.create);
router.post("/tv-series/:id", tvSeries.update);
router.get("/tv-series/:id", tvSeries.getOne);
router.delete("/tv-series/:id", tvSeries.delete);

router.get("/tv-episode", tvEpisodes.getAll);
router.post("/tv-episode", tvEpisodes.create);
router.post("/tv-episode/:id", tvEpisodes.update);
router.get("/tv-episode/:id", tvEpisodes.getOne);
router.delete("/tv-episode/:id", tvEpisodes.delete);

router.get("/genre", genres.getAll);
router.post("/genre", genres.create);
router.post("/genre/:id", genres.update);
router.get("/genre/:id", genres.getOne);
router.delete("/genre/:id", genres.delete);

router.get("/rol", roles.getAll);
router.post("/rol", roles.create);
router.post("/rol/:id", roles.update);
router.get("/rol/:id", roles.getOne);
router.delete("/rol/:id", roles.delete);

router.get("/review", reviews.getAll);
router.post("/review", reviews.create);
router.post("/review/:id", reviews.update);
router.get("/review/:id", reviews.getOne);
router.delete("/review/:id", reviews.delete);

// Advance routers
router.post("/user/create-with-review", users.createWithReview);
router.post("/tv-series/create-with-episode", tvSeries.createWithTvEpisodes);
router.post("/tv-series/create-review", tvSeries.createWithReview);
router.post("/tv-series/create-with-genre", tvSeries.createWithGenres);
router.post("/tv-series/create-with-crew-member", tvSeries.createWithCrewMembers);
router.post("/tv-episode/create-with-genre", tvEpisodes.createWithGenres);
router.post("/tv-episode/create-with-crew-member", tvEpisodes.createWithCrewMembers);
router.post("/movie/create-review", movies.createWithReview);
router.post("/movie/create-with-genre", movies.createWithGenre);
router.post("/movie/create-with-crew-member", movies.createWithCrewMember);
router.post("/crew-member/create-with-crew-member", crewMembers.createWithRoles);
module.exports = router;