const express = require('express');
const router = express.Router();
const crew_members = require("../controllers/crew_members_controller");

router.get("/crew-members", crew_members.getAll);
router.post("/crew-members", crew_members.create);
router.post("/crew-members/:id", crew_members.update);
router.get("/crew-members/:id", crew_members.getOne);
router.delete("/crew-members/:id", crew_members.delete);

//Advance Routes
router.get("/crew-members/get-with-roles", crew_members.getAllWithRoles);
router.get("/crew-members/get-with-roles/:id", crew_members.getWithRoles);

module.exports = router;