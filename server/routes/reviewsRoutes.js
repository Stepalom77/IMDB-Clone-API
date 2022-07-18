const express = require('express');
const router = express.Router();
const reviews = require("../controllers/reviews_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/reviews", reviews.getAll);
router.post("/reviews", authMiddleware, reviews.create);
router.post("/reviews/:id", authMiddleware, reviews.update);
router.get("/reviews/:id",  reviews.getOne);
router.delete("/reviews/:id", authMiddleware, reviews.delete);

module.exports = router;