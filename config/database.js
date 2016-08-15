var url = require('url'),
  dateFormat = require('dateformat'),
  mongoose = require('mongoose')

var MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/Hospitality'

module.exports = function () {
  return {
    mongoose: mongoose,
    schema: mongoose.Schema,

    connect: function (callback) {
      let now = new Date()
      let date = dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
      mongoose.connect(MONGODB_URL)

      mongoose.connection.on('error', function (err) {
        console.log('%s - Connection error: %s'.red, date, err)
      })

      mongoose.connection.on('disconnected', function () {
        console.log('%s - Disconnected from database!'.red, date)
      })

      mongoose.connection.on('connected', function () {
        console.log('%s - Connection to database established'.blue, date)
      })

      process.on('SIGINT', function () {
        mongoose.connection.close(function () {
          console.log('%s - Main process killed - database connection closed!'.yellow)
          process.exit(0)
        })
      })

      mongoose.connection.once('open', callback)
    },

    model: function (name, schema) {
      return mongoose.model(name, schema)
    }
  }
}
