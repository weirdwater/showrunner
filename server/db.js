const MongoClient = require('mongodb').MongoClient

module.exports = {
  connection: (closure) => {
    return MongoClient.connect(`mongodb://mongo:27017/showrunner`, (err, db) => {
      if (err) return console.log(err)

      closure(db)
    })
  }
}
