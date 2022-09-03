const express = require('express');
const router = express.Router();
const crew_members_roles = require('../controllers/crew_members_roles_controller');


router.post('/crew-members-roles', crew_members_roles.create);

module.exports = router;