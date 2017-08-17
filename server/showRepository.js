const connection = require('./db').connection

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      connection(db => {
        db.collection('shows')
          .find()
          .toArray()
          .then(resolve)
          .catch(reject)
      })
    })
  },
  getFromSlug: (slug) => {
    return new Promise((resolve, reject) => {
      connection(db => {
        db.collection('shows')
          .findOne({ slug })
          .then(resolve)
          .catch(reject)
      })
    })
  }
}
