const express = require('express');

const router = express.Router();

const { getindex } = require('../controllers/index');

router.get('/', getindex);

module.exports = router;