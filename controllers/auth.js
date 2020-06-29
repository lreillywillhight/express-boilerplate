const express = require('express')
const router = express.Router()
const db = require('../models')
// import middleware
const flash = require('flash')


//signup get route
router.get('/register', (req,res) => {
    res.render('auth/register')
})

//signup post route
router.post('/register', (req,res) => {
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function([user, created]) {
        // if user was created
        if (created) {
            console.log('User created! *****')
            res.redirect('/')
        } else {
            console.log("user email already exists.XXXXXX")
            req.flash('error', 'error: email already in database.')
            res.redirect('auth/register')
        }
            // authenticate user and start authorization
        // else if user already exists
            // send error - user email already exists
            // redirect back to signup
    }).catch(function(err) {
        console.log(`Error found. \nMessage: ${err.message} \nPlease review - ${err}.`)
        res.redirect('auth/register')
    })
})


//login get route
router.get('/login', (req,res) => {
    res.render('auth/login')
})

//login post route





// export router
module.exports = router