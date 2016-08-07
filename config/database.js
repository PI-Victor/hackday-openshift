var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbCollection', function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:'.red, err);
    } else {
        console.log('Connected to Server successfully!'.green);
    }
});
