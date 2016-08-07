var express = require('express'),
    app = module.exports = express(),
    db = require('database');
require('application')(app)
require('routes')(app)


server = app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost' , function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application accessible on http://%s:%s".green, host, port);
});
