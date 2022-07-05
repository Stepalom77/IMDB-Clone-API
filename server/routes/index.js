
const express = require("express");

const router = express.Router();


const users = require("../controllers/users_controller");
const crewMembers = require("../controllers/crew_members_controller");



router.get('/users', users.getAll);
router.post('/users', users.create);
router.post('/users/:id', users.update);
router.get('/users/:id', users.getOne);
router.delete('/users/:id', users.delete);

router.get("/crew-members", crewMembers.getAll);
router.post("/crew-members", crewMembers.create);
router.post("/crew-members/:id", crewMembers.update);
router.get("/crew-members/:id", crewMembers.getOne);
router.delete("/crew-members/:id", crewMembers.delete);

module.exports = router;