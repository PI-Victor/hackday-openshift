var express = require('express'),
  database = require('database'),
  colors = require('colors'),
  app = module.exports = express()

var hospitality = database()

/*
  Bootstrap the application in such a way that it's dependent to the
  database connection.
*/

hospitality.connect(function () {
  // Bootstrap application settings and corresponding routes.
  require('application')(app)
  require('routes')(app)

  var server = app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost')

  server.on('error', function (err) {
    console.log('Failed to run instance %s. Terminating...'.red, err)
  })

  server.once('listening', function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Application accessible on http://%s:%s'.green, host, port)
  })
})
