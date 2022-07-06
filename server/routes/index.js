
const express = require("express");

const router = express.Router();


const users = require("../controllers/users_controller");
const crewMembers = require("../controllers/crew_members_controller");
const movies = require("../controllers/movies_controller");
const tvSeries = require("../controllers/tv_series_controller");
//tv_episodes (foreign keys)
const tvEpisodes = require("../controllers/tv_episodes_controller");
const genres = require("../controllers/genres_controller");
const roles = require("../controllers/roles_controller");
//reviews (foreign keys)
const reviews = require("../controllers/reviews_controller");
//crew movies
const crewMembersMovies = require("../controllers/crew_members_movies_controller");
//crew series
const crewMembersTvSeries = require("../controllers/crew_members_tv_series_controller");
//crew episodes
const crewMembersTvEpisodes = require("../controllers/crew_members_tv_episodes_controller");
//crew roles
const crewMembersRoles = require("../controllers/crew_members_roles_controller");
//movies genres
const moviesGenres = require("../controllers/movies_genres_controller");
//series genres
const tvSeriesGenres = require("../controllers/tv_series_genres_controller");
//episodes genres
const tvEpisodesGenres = require("../controllers/tv_episodes_genres_controller");

router.get('/users', users.getAll);
router.post('/users', users.create);
router.post('/users/:id', users.update);
router.get('/users/:id', users.getOne);
router.delete('/users/:id', users.delete);

router.get("/crew-members", crewMembers.getAll);
router.post("/crew-members", crewMembers.create);
router.post("/crew-members/:id", crewMembers.update);
router.get("/crew-members/:id", crewMembers.getOne);
router.delete("/crew-members/:id", crewMembers.delete);

router.get("/movies", movies.getAll);
router.post("/movies", movies.create);
router.post("/movies/:id", movies.update);
router.get("/movies/:id", movies.getOne);
router.delete("/movies/:id", movies.delete);

router.get("/tv-series", tvSeries.getAll);
router.post("/tv-series", tvSeries.create);
router.post("/tv-series/:id", tvSeries.update);
router.get("/tv-series/:id", tvSeries.getOne);
router.delete("/tv-series/:id", tvSeries.delete);

router.get("/tv-episodes", tvEpisodes.getAll);
router.post("/tv-episodes", tvEpisodes.create);
router.post("/tv-episodes/:id", tvEpisodes.update);
router.get("/tv-episodes/:id", tvEpisodes.getOne);
router.delete("/tv-episodes/:id", tvEpisodes.delete);

router.get("/genres", genres.getAll);
router.post("/genres", genres.create);
router.post("/genres/:id", genres.update);
router.get("/genres/:id", genres.getOne);
router.delete("/genres/:id", genres.delete);

router.get("/roles", roles.getAll);
router.post("/roles", roles.create);
router.post("/roles/:id", roles.update);
router.get("/roles/:id", roles.getOne);
router.delete("/roles/:id", roles.delete);

router.get("/reviews", reviews.getAll);
router.post("/reviews", reviews.create);
router.post("/reviews/:id", reviews.update);
router.get("/reviews/:id", reviews.getOne);
router.delete("/reviews/:id", reviews.delete);

router.get("/crew-members-movies", crewMembersMovies.getAll);
router.post("/crew-members-movies", crewMembersMovies.create);
router.post("/crew-members-movies/:id", crewMembersMovies.update);
router.get("/crew-members-movies/:id", crewMembersMovies.getOne);
router.delete("/crew-members-movies/:id", crewMembersMovies.delete);

router.get("/crew-members-tv-series", crewMembersTvSeries.getAll);
router.post("/crew-members-tv-series", crewMembersTvSeries.create);
router.post("/crew-members-tv-series/:id", crewMembersTvSeries.update);
router.get("/crew-members-tv-series/:id", crewMembersTvSeries.getOne);
router.delete("/crew-members-tv-series/:id", crewMembersTvSeries.delete);

router.get("/crew-members-tv-episodes", crewMembersTvEpisodes.getAll);
router.post("/crew-members-tv-episodes", crewMembersTvEpisodes.create);
router.post("/crew-members-tv-episodes/:id", crewMembersTvEpisodes.update);
router.get("/crew-members-tv-episodes/:id", crewMembersTvEpisodes.getOne);
router.delete("/crew-members-tv-episodes/:id", crewMembersTvEpisodes.delete);

router.get("/crew-members-roles", crewMembersRoles.getAll);
router.post("/crew-members-roles", crewMembersRoles.create);
router.post("/crew-members-roles/:id", crewMembersRoles.update);
router.get("/crew-members-roles/:id", crewMembersRoles.getOne);
router.delete("/crew-members-roles/:id", crewMembersRoles.delete);

router.get("/movies-genres", moviesGenres.getAll);
router.post("/movies-genres", moviesGenres.create);
router.post("/movies-genres/:id", moviesGenres.update);
router.get("/movies-genres/:id", moviesGenres.getOne);
router.delete("/movies-genres/:id", moviesGenres.delete);

router.get("/tv-series-genres", tvSeriesGenres.getAll);
router.post("/tv-series-genres", tvSeriesGenres.create);
router.post("/tv-series-genres/:id", tvSeriesGenres.update);
router.get("/tv-series-genres/:id", tvSeriesGenres.getOne);
router.delete("/tv-series-genres/:id", tvSeriesGenres.delete);

router.get("/tv-episodes-genres", tvEpisodesGenres.getAll);
router.post("/tv-episodes-genres", tvEpisodesGenres.create);
router.post("/tv-episodes-genres/:id", tvEpisodesGenres.update);
router.get("/tv-episodes-genres/:id", tvEpisodesGenres.getOne);
router.delete("/tv-episodes-genres/:id", tvEpisodesGenres.delete);

module.exports = router;