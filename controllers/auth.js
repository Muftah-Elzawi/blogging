const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

exports.signup = (req, res) => {
    console.log(req.body)
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'this email is taken'
            })
        }

        const { name, email, password } = req.body
        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`

        let newUser = new User({ name, email, password, profile, username })
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.json({
                user: success
            })
            // res.json({
            //     message: 'signup success! please signin'
            // })

        })
    })

};

exports.signin = (req, res) => {
    const { email, password } = req.body
    //check user
    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User dose not exist, please signup"
            })
        }
        //authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email and Password do not match"
            })
        }

        //generate JWT
    })

}