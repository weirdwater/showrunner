const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')
const db = require('./server/db')

const app = express()

const api = require('./server/routes/api')
const rss = require('./server/routes/rss')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', api)
app.use('/rss', rss)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// Getting it up!
const port = process.env.PORT || '3000'
const host = process.env.HOST_DOMAIN || 'localhost'
const mongoHost = process.env.MONGO_HOST || 'localhost'
const mongoPort = process.env.MONGO_PORT || '27017'

app.locals.appUrl = port === 80 ? `http://${host}` : `http://${host}:${port}`

const mongoUrl = `mongodb://${mongoHost}:${mongoPort}/showrunner`
db.connect(mongoUrl, err => {
  if (err) {
    console.error(`unable to connect to Mongo at ${mongoUrl}`)
    exit(1)
  } else {
    // Docker is exposing port 80
    app.listen(3000, () => console.log(`Running on ${app.locals.appUrl}`))
  }
})

