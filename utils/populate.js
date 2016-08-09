/*  Populate the database with bogus data.
*/
var assert = require('assert'),
  colors = require('colors'),
  async = require('async'),
  promise = require('promise'),
  mongoose = require('mongoose'),
  db = require('database'),
  emergency = require('emer_model'),
  patients = require('pati_model'),
  medication = require('med_model'),
  onduty = require('onduty_model');

function genRandom (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var callBack = function (err, value) {
  if (err) {
    console.log('An error occured while saving'.yellow, err);
  }
}

var closeDb = function () {
  db.close();
}

var genRecords = function (callBack) {
  for (i=0; i <= 100; i++) {
    new emergency({
      room_no: genRandom(1, 1000).toString(),
      patient_no: genRandom(300, 36789).toString(),
      severity: genRandom(1, 6).toString()
    }).save(callBack)

    new patients({
      name: 'patient_' + i.toString(),
      age: genRandom(1, 100).toString(),
      sex: 'male',
      address: 'street. no 1',
      diagnosis: [
        {
          body: 'cold',
        }
      ]
    }).save(callBack)

    new onduty({
      name: 'user_duty_' + i.toString(),
      phone: genRandom(123123, 928080345),
      pager: genRandom(91283012, 801238012),
      email: 'test@test' + i.toString() + '.com'
    }).save(callBack)

    new medication({
      name: 'medication_' + i.toString(),
      type: 'antibiotics',
      comments: [
        {
          body: 'good for cold'
        }
      ]
    }).save(callBack)
  }
}

db.on('close',function () {
  console.log('test')
})

// since node is non-blocking, this gets executed before the actual save() of
// the models, so i need to find an async way of executing this when the for
// loop has eneded.
mongoose.disconnect();
