const express = require('express');

const router = express.Router();

const { getShop } = require('../controllers/bs-demo');

router.get('/shop', getShop);

module.exports = router;