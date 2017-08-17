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

  get: (slug) => {
    return new Promise((resolve, reject) => {
      connection(db => {
        db.collection('shows')
          .findOne({ slug })
          .then(resolve)
          .catch(reject)
      })
    })
  },

  add: (show) => {
    return new Promise((resolve, reject) => {
      connection(db => {
        db.collection('shows')
          .insert(show)
          .then(status => {
            if (status.result.ok === 1) {
              const newShow = result.ops[0]
              resolve(newShow)
            }
            else {
              reject(status.result)
            }
          })
          .catch(reject)
      })
    })
  }
}
