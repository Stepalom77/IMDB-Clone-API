const express = require('express');
const router = express.Router();
const crew_members_tv_series = require('../controllers/crew_members_tv_series_controller');

router.post('/crew-members-tv-series', crew_members_tv_series.create);

module.exports = router;