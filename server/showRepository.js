const db = require('./db')

const getAll = () => {
  return new Promise((resolve, reject) => {
    db.get().collection('shows')
      .find()
      .toArray()
      .then(resolve)
      .catch(reject)
  })
}

const get = (slug) => {
  return new Promise((resolve, reject) => {
    db.get().collection('shows')
      .findOne({ slug })
      .then(resolve)
      .catch(reject)
  })
}

const add = (show) => {
  return new Promise(async (resolve, reject) => {
    get(show.slug).then(showWithSlug => {
      if (showWithSlug) {
        reject(new Error('Show with slug already exists'))
      }
      else {
        show.dateCreated = new Date()

        db.get().collection('shows')
          .insert(show)
          .then(status => {
            if (status.result.ok === 1) {
              console.log('show inserted')
              const newShow = status.ops[0]
              resolve(newShow)
            }
            else {
              reject(status.result)
            }
          })
          .catch(reject)
      }
    })
  })
}

const save = (show) => {
  return new Promise(async (resolve, reject) => {
    const oldShow = await get(show.slug)
    const unchangeAbles = {
      _id: oldShow._id,
      slug: oldShow.slug
    }

    const nextShow = Object.assign({}, oldShow, show, unchangeAbles)

    db.get().collection('shows')
      .save(nextShow)
      .then(status => {
        if (status.result.ok) resolve(nextShow)
        else reject(new Error('Something went wrong with saving'))
      })
      .catch(reject)
  })
}

const addEpisode = async (showSlug, episode) => {
  const show = await get(showSlug)

  if (episode.number === undefined || episode.number === null) {
    episode.number = show.episodes.length + 1
  }
  episode.dateCreated = new Date()
  show.episodes.push(episode)

  const newShow = await save(show)

  return newShow.episodes[episode.number]
}

module.exports = {
  addEpisode,
  getAll,
  get,
  add,
  save
}
