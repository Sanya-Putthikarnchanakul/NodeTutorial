const express = require('express');

const router = express.Router();

const { 
    get404
} = require('../controllers/errors');

router.get('/404', get404);

module.exports = router;