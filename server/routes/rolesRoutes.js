const express = require('express');
const router = express.Router();
const roles = require("../controllers/roles_controller");
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.get("/roles", roles.getAll);
router.post("/roles", authMiddleware, roles.create);
router.post("/roles/:id", roles.update);
router.get("/roles/:id", roles.getOne);
router.delete("/roles/:id", roles.delete);

module.exports = router;