const express = require('express');
const router = express.Router();
const { getRecommendation } = require('../controllers/musicController');

router.post('/', getRecommendation);

module.exports = router;
