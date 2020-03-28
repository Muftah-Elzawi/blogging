const express = require('express');
const { signup, signin, signout } = require('../controllers/auth')
const router = express.Router();

// Validators
const { runValidation } = require('../validators');
const { userSignupValidator, userSigninValidator } = require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('signout', signout)

module.exports = router