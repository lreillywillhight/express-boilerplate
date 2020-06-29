// NPM libraries
require('dotenv').config()
const Express = require('express')
const ejsLayouts = require("express-ejs-layouts")
// middleware for app/authentication
// helmet, morgan, passport, and custom middleware, express-sessions, squelize sessions, flash
const helmet = require('helmet')
const session = require('express-session')
const flash = require('flash')

// app setup
const app = Express()
app.use(Express.urlencoded({ extended: false }))
app.use(Express.static(__dirname + "/public"))
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(require('morgan')('dev'))
app.use(helmet())

// ROUTES

app.get('/', (req, res) => {
    // check to see if user is logged in
    res.render('index')
})





app.listen(process.env.PORT || 3000, function (port) { console.log(`port ${process.env.PORT}`) })