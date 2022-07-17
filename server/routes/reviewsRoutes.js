const express = require('express');
const router = express.Router();
const reviews = require("../controllers/reviews_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/review", authMiddleware, reviews.getAll);
router.post("/review", authMiddleware, reviews.create);
router.post("/review/:id", authMiddleware, reviews.update);
router.get("/review/:id", authMiddleware, reviews.getOne);
router.delete("/review/:id", authMiddleware, reviews.delete);

module.exports = router;