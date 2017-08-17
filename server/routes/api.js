const express = require('express')
const router = express.Router()
const ObjectID = require('mongodb').ObjectID
const connection = require('../db').connection
const showRepo = require('../showRepository')

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

router.get('/shows', (req, res, next) => {
	showRepo.getAll()
    .then(shows => {
      response.data = shows
      res.json(response)
    })
    .catch(next)
})

router.post('/shows', (req, res) => {
  const show = req.body
  showRepo.add(show)
    .then(newShow => {
      response.status = 201
      response.message = `Show ${newShow.slug} created`
      response.data = newShow
      res.json(response)
    })
    .catch(next)
})

router.get('/shows/:slug', (req, res, next) => {
  const slug = req.params.slug;
  showRepo.get(slug)
    .then(show => {
      if (!show) {
        response.status = 404
        response.message = `Show with slug ${slug} not found`
        res.status(404)
      }

      response.data = show
      res.json(response)
    })
    .catch(next)

})

router.put('/shows/:slug', (req, res) => {
  const slug = req.params.slug
  const showChanges = req.body
  connection(db => {
    db.collection('shows')
      .findOne({ slug })
      .then(show => {
        console.log('found show', show)
        const unchangables = {_id: show._id, episodes: show.episodes, slug: show.slug}
        const updatedShow = Object.assign({}, show, showChanges, unchangables)
        db.collection('shows')
          .save(updatedShow)
          .then(console.log)
      })
  })
})

module.exports = router
