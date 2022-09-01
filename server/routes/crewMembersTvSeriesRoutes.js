const express = require('express');
const router = express.Router();
const crew_members_tv_series = require('../controllers/crew_members_tv_series_controller');
const authMiddleware = require('../middlewares/authorizationMiddleware');

router.post('/crew-members-tv-series', authMiddleware, crew_members_tv_series.create);

module.exports = router;