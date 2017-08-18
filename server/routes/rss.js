const express = require('express')
const router = express.Router()
const showRepo = require('../showRepository')
const RSS = require('rss')
const fs = require('fs')

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath)
  return stats.size
}

function newShowFeed(show, req) {
  const { appUrl } = req.app.locals

  const itunes = {
    author: {'itunes:author': show.author},
    summary: {'itunes:summary': show.description},
    owner: {'itunes:owner': [
      {"itunes:name": 'Arjo Bruijnes'},
      {"itunes:email": 'arjo@weirdwater.net'}
    ]},
    image: {'itunes:image': {
      _attr: {
        href: `${appUrl}/assets/${show.art}`
      }
    }},
    category: {'itunes:category': {
      _attr: {
        text: show.category
      }
    }}
  }


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
      itunes.author,
      itunes.summary,
      itunes.owner,
      itunes.image,
      itunes.category
    ]
  })

  show.episodes.forEach(episode => {
    const audioFile = 'assets/audio/test.mp3'
    const audioFilePath = `./dist/${audioFile}`
    const audioUrl = `${appUrl}/${audioFile}`

    const epiTunes = {
      subtitle: {'itunes:subtitle': episode.subtitle},
      duration: {'itunes:duration': '0:32'},
      summary: {'itunes:summary': episode.summary}
    }

    feed.item({
      title: episode.title,
      guid: audioUrl,
      date: episode.dateCreated,
      enclosure: {
        url: audioUrl,
        size: getFileSizeInBytes(audioFilePath),
        type: 'audio/mp3'
      },
      custom_elements: [
        itunes.author,
        epiTunes.subtitle,
        epiTunes.duration,
        epiTunes.summary
      ]
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
