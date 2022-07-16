const express = require('express');
const router = express.Router();
const users = require("../controllers/users_controller");

router.get('/user', users.getAll);
router.post('/user', users.create);
router.post('/user/:id', users.update);
router.get('/user/:id', users.getOne);
router.delete('/user/:id', users.delete);

//Advance Routes
router.post("/user/create-with-review", users.createWithReview);

module.exports = router;