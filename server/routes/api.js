const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID


const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017/showrunner', (err, db) => {
		if (err) return console.log(err)

		closure(db)
	})
}

const sendError = (err, res) => {
	response.status = 501
	response.message = typeof err === 'object' ? err.message : err
	res.status(501).json(response)
}

let response = {
	status: 200,
	data: [],
	message: null
}

router.get('/users', (req, res) => {
	connection(db => {
		db.collection('users')
			.find()
			.toArray()
			.then(users => {
				response.data = users
				res.json(response)
			})
			.catch(err => {
				sendError(err, res)
			})
	})
})

router.get('/shows', (req, res) => {
	connection(db => {
		db.collection('shows')
			.find()
			.toArray()
			.then(shows => {
				response.data = shows
				res.json(response)
			})
			.catch(err => {
				sendError(err, res)
			})
	})
})

router.post('/shows', (req, res) => {
  console.log(req.body)
  res.send('This was a POST to /shows')
})

router.get('/shows/:id', (req, res) => {
  const slug = req.params.id;
  connection(db => {
    db.collection('shows')
      .findOne({ slug })
      .then(show => {
        if (show) {
          response.data = show
          res.json(response)
          return
        }

        response.status = 404;
        response.message = `No show found with the slug: ${slug}`
        console.error(`404 - No show found with the slug: ${slug}`)
        res.status(404)
        res.json(response)
      })
      .catch(err => {
        sendError(err, res)
      })
  })
})

module.exports = router
