const express = require('express');

const router = express.Router();

const { 
    getLogin,
    postLogin,
    postSignup
} = require('../controllers/users');

router.get('/login', getLogin);
router.post('/login', postLogin);
router.post('/signup', postSignup);

module.exports = router;