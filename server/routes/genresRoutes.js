const express = require('express');
const router = express.Router();
const genres = require("../controllers/genres_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/genres", genres.getAll);
router.post("/genres", genres.create);
router.post("/genres/:id", genres.update);
router.get("/genres/:id", genres.getOne);
router.delete("/genres/:id", genres.delete);

module.exports = router;