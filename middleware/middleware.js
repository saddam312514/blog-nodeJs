
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const flash = require('connect-flash')
const MongoDBStore = require('connect-mongodb-session')(session)
const config = require('config')
const {bindUserWithRequest} = require('./authMiddleware')
const setLocals = require('./setLocals')
const MONGODB_URI = `mongodb+srv://${config.get('db-username')}:${config.get('db-password')}@new-project-rtp3t.mongodb.net/blog-page`

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'session',
    expires: 1000 * 60 * 60 * 1000 * 2
})

const middleware = [
    morgan('dev'),
    express.static('public'),
   express.urlencoded({extended:true}),
   express.json(),
   session({
       secret: config.get('secret'),
       resave:false,
       saveUninitialized: false,
       store: store
   }),
   flash(),
   bindUserWithRequest(),
   setLocals()
   
  
]
module.exports = app => {
    middleware.forEach(r => {
        app.use(r)
    })
}