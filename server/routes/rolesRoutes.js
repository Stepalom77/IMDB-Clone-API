const express = require('express');
const router = express.Router();
const roles = require("../controllers/roles_controller");

router.get("/rol", roles.getAll);
router.post("/rol", roles.create);
router.post("/rol/:id", roles.update);
router.get("/rol/:id", roles.getOne);
router.delete("/rol/:id", roles.delete);

module.exports = router;