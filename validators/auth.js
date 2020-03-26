const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be Valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 characters long')
]