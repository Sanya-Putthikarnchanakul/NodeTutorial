//#region 3rd Package

const express = require('express');

//#endregion

const router = express.Router();

const { getIndex } = require('../controllers/shop');

router.get('/', getIndex);

module.exports = router;