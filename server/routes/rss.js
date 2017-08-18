const express = require('express')
const router = express.Router()
const showRepo = require('../showRepository')
const Feed = require('feed')

function newShowFeed(show, req) {
  const feed = new Feed({
    title: show.title,
    description: show.description,
    link: show.link,
    copyright: show.copyright,
    image: `${req.app.locals.appUrl}/assets/${show.art}`,
    author: {
      name: 'John Doe',
      email: 'john@doe.com',
      link: 'https://doe.com'
    }
  })


  show.episodes.forEach(episode => {
    feed.addItem({
      title:          episode.title,
      link:           episode.link,
      description:    episode.description,
      date:           episode.dateCreated
    })
  })

  return feed
}

router.get('/shows/:slug', (req, res, next) => {
  const slug = req.params.slug
  showRepo.get(slug)
    .then(show => {
      const feed = newShowFeed(show, req)
      res.set('Content-Type', 'text/xml')
      res.send(feed.rss2())
    })
    .catch(next)
})

module.exports = router
