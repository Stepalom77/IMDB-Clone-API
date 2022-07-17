const express = require('express');
const router = express.Router();
const genres = require("../controllers/genres_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/genre", genres.getAll);
router.post("/genre", genres.create);
router.post("/genre/:id", genres.update);
router.get("/genre/:id", genres.getOne);
router.delete("/genre/:id", genres.delete);

module.exports = router;