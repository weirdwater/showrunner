const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

const app = express()

const api = require('./server/routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', api)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log(`Running on http://localhost:${port}`))
