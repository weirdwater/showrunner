const connection = require('./db').connection

const getAll = () => {
  return new Promise((resolve, reject) => {
    connection(db => {
      db.collection('shows')
        .find()
        .toArray()
        .then(resolve)
        .catch(reject)
    })
  })
}

const get = (slug) => {
  return new Promise((resolve, reject) => {
    connection(db => {
      db.collection('shows')
        .findOne({ slug })
        .then(resolve)
        .catch(reject)
    })
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

        connection(db => {
          db.collection('shows')
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
        })
      }
    })
  })
}

const save = (show) => {
  return new Promise(async (resolve, reject) => {
    const oldShow = await get(show.slug)
    const unchangeAbles = {
      _id: oldShow._id,
      episodes: oldShow.episodes,
      slug: oldShow.slug
    }

    const nextShow = Object.assign({}, oldShow, show, unchangeAbles)

    connection(db => {
      db.collection('shows')
        .save(nextShow)
        .then(status => {
          if (status.result.ok) resolve(nextShow)
          else reject(new Error('Something went wrong with saving'))
        })
        .catch(reject)
    })
  })
}

module.exports = {
  getAll,
  get,
  add,
  save
}
