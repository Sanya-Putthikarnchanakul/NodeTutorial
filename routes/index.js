const express = require('express');

const router = express.Router();

const { 
    getIndex,
    getGeneralForm,
    getFormValidation
} = require('../controllers/index');

const isAuth = require('../utilities/isAuth');

router.get('/', isAuth, getIndex);
router.get('/general-form', isAuth, getGeneralForm);
router.get('/form-validation', isAuth, getFormValidation);

module.exports = router;