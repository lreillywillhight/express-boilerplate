const express = require('express')
const router = express.Router()
const db = require('../models')
// import middleware

//signup get route
router.get('/register', (req,res) => {
    res.render('auth/register')
})


//signup post route


//login get route
router.get('/login', (req,res) => {
    res.render('auth/login')
})

//login post route





// export router
module.exports = router