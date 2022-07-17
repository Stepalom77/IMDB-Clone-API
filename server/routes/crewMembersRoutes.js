const express = require('express');
const router = express.Router();
const crewMembers = require("../controllers/crew_members_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/crew-members", crewMembers.getAll);
router.post("/crew-members", crewMembers.create);
router.post("/crew-members/:id", crewMembers.update);
router.get("/crew-members/:id", crewMembers.getOne);
router.delete("/crew-members/:id", crewMembers.delete);

//Advance Routes
router.post("/crew-members/create-with-roles", crewMembers.createWithRoles);

module.exports = router;