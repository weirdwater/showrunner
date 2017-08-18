const MongoClient = require('mongodb').MongoClient

module.exports = {
  connection: (closure) => {
    const host = process.env.HOST_DOMAIN || 'localhost'
    return MongoClient.connect(`mongodb://${host}:27017/showrunner`, (err, db) => {
      if (err) return console.log(err)

      closure(db)
    })
  }
}
