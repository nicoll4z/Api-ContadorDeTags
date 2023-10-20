const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');
const tagController = require('../controllers/urlControllerpush');

router.post('/count-tags', urlController.countTags);

router.get('/tag-counts', tagController.getTagCounts);

module.exports = router;
