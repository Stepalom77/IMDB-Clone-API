const express = require('express');
const router = express.Router();
const crewMembers = require("../controllers/crew_members_controller");

router.get("/crew-member", crewMembers.getAll);
router.post("/crew-member", crewMembers.create);
router.post("/crew-member/:id", crewMembers.update);
router.get("/crew-member/:id", crewMembers.getOne);
router.delete("/crew-member/:id", crewMembers.delete);

//Advance Routes
router.post("/crew-member/create-with-crew-member", crewMembers.createWithRoles);

module.exports = router;