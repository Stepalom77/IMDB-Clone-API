const express = require('express');
const router = express.Router();
const crew_members_roles = require('../controllers/crew_members_roles_controller');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/crew-members-roles', authMiddleware, crew_members_roles.create);

module.exports = router;