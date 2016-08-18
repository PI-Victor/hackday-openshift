var express = require('express')
var database = require('database')
var colors = require('colors')

const app = module.exports = express()
const hospitality = database()

/*
  Bootstrap the application in such a way that it's dependent on the
  database connection.
*/

hospitality.connect(() => {
  // Bootstrap application settings and corresponding routes.
  require('application')(app)
  require('routes')(app, hospitality)

  let server = app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost')

  server.on('error', (err) => {
    console.log(`Failed to run instance ${err} Terminating...`.red)
  })

  server.once('listening', () => {
    let host = server.address().address
    let port = server.address().port
    console.log(`Application accessible on http://${host}:${port}`.green)
  })
})
