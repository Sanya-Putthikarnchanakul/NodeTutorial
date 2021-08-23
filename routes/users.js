const express = require('express');

const router = express.Router();

const { 
    getLogin,
    postLogin,
    postSignup,
    getLogout
} = require('../controllers/users');

router.get('/login', getLogin);
router.post('/login', postLogin);
router.post('/signup', postSignup);
router.get('/logout', getLogout);

module.exports = router;