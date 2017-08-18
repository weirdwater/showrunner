const MongoClient = require('mongodb').MongoClient

const state = {
  db: null
}

const connect = (url, done) => {
  if (state.db) return done()

  MongoClient.connect(url, (err, db) => {
    if (err) return done(err)
    state.db = db
    done()
  })
}

const get = () => {
  return state.db
}

const close = (done) => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

module.exports = {
  connect,
  get,
  close
}
