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
        console.log(`${date} - Connection error: ${err} to: ${url}`.red)
      })

      mongoose.connection.on('disconnected', () => {
        console.log(`${date} - Disconnected from ${url}`.red)
      })

      mongoose.connection.on('connected', () => {
        console.log(`${date} - Connection to database established on ${url}`.blue)
      })

      process.on('SIGINT', () => {
        mongoose.connection.close(() => {
          console.log(`${date} - Main process killed - connection to ${url} closed!`.yellow)
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
