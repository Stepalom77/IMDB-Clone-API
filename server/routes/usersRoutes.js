const express = require('express');
const router = express.Router();
const users = require("../controllers/users_controller");
const authUser = require('../controllers/auth_users_controller');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/auth-user/login', authUser.login);
router.get('/users', users.getAll);
router.post('/users', users.create);
router.post('/users/:id', authMiddleware, users.update);
router.get('/users/:id', users.getOne);
router.delete('/users/:id', authMiddleware, users.delete);

//Advance Routes
router.post("/users/create-with-reviews", users.createWithReview);

module.exports = router;