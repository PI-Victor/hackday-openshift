var express = require('express'),
    reload = require('reload'),
    app = express();

require('application')(app)

app.listen('/', function(req, res){
    res.send('Welcome to the NodeJS OpenShift Application Sample');
})

var server = app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost' , function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application accessible on http://%s:%s ", host, port);
});

// for debugging purposes reload the app with supervisor on each html/js change made
reload(server, app);
    