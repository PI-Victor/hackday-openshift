var mongoose = require('mongoose');
    patients = require('patients'),
    emergency = require('emergency'),
    onduty = require('onduty'),
    medication = require('medication');


var db = mongoose.connection;
host = process.env.MONGODB_HOST || 'localhost';
port = process.env.MONGODB_PORT || 27017;
uri = 'mongodb://' + host + ':' + port;

db.on('error', function(err) {
  console.log('Couldn\'t connect to database on: %s'.red, uri);
});

db.once('open', function(){
  console.log('Successfully connect to %s'.green, uri);
});

mongoose.connect(uri);
