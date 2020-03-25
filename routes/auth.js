const express = require('express');
const { time } = require('../controllers/auth')
const router = express.Router();

router.get('/signup', signup)

module.exports = router