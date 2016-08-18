'use strict'

var dateFormat = require('dateformat')
var mongoose = require('mongoose')

// TODO: insert all the openshift origin variables that are needed to connect
// to a mongodb instance
var url = process.env.MONGODB_URL || 'mongodb://localhost/Hospitality'

module.exports = () => {
  return {
    mongoose: mongoose,
    schema: mongoose.Schema,

    connect: (callback) => {
      let date = dateFormat(Date.now(), 'dddd, mmmm dS, yyyy, h:MM:ss TT')
      mongoose.connect(url)

      mongoose.connection.on('error', (err) => {
        console.log('%s - Connection error: %s to: '.red, date, err, url)
      })

      mongoose.connection.on('disconnected', () => {
        console.log('%s - Disconnected from %s'.red, date, url)
      })

      mongoose.connection.on('connected', () => {
        console.log('%s - Connection to database established on %s'.blue, date, url)
      })

      process.on('SIGINT', () => {
        mongoose.connection.close(() => {
          console.log('%s - Main process killed - connection to %s closed!'.yellow, date, url)
          process.exit(0)
        })
      })

      mongoose.connection.once('open', callback)
    },

    model: (name, schema) => {
      return mongoose.model(name, schema)
    }
  }
}
