const express = require('express')
const router = express.Router()
const showRepo = require('../showRepository')
const RSS = require('rss')

function newShowFeed(show, req) {
  const { appUrl } = req.app.locals
  const feed = new RSS({
    title: show.title,
    description: show.description,
    feed_url: `${appUrl}/rss/shows/${show.slug}`,
    site_url: `${appUrl}/shows/${show.slug}`,
    copyright: show.copyright,
    language: show.language,
    pubDate: show.dateCreated,
    custom_namespaces: {
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      {'itunes:author': show.author},
      {'itunes:summary': show.description},
      {'itunes:owner': [
        {"itunes:name": 'Arjo Bruijnes'},
        {"itunes:email": 'arjo@weirdwater.net'}
      ]},
      {'itunes:image': {
        _attr: {
          href: `${appUrl}/assets/${show.art}`
        }
      }},
      {'itunes:category': {
        _attr: {
          text: show.category
        }
      }}
    ]
  })

  show.episodes.forEach(episode => {
    feed.item({
      title: episode.title
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
      res.send(feed.xml())
    })
    .catch(next)
})

module.exports = router
