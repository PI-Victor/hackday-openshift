var express = require('express'),
  app = module.exports = express();

// Configure the application, the routes and try to connect to the MongoDB

require('application')(app)
require('routes')(app)
require('database');


server = app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost')

server.on('error', function(err){
  console.log('Failed to run instance %s. Terminating...'.red, err)
  process.exit()
});

server.once('listening', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application accessible on http://%s:%s".green, host, port);
});
