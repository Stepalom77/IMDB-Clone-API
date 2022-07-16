const express = require('express');
const router = express.Router();
const reviews = require("../controllers/reviews_controller");

router.get("/review", reviews.getAll);
router.post("/review", reviews.create);
router.post("/review/:id", reviews.update);
router.get("/review/:id", reviews.getOne);
router.delete("/review/:id", reviews.delete);

module.exports = router;