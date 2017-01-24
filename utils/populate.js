'use strict'
/*  Populate the database with bogus data.
*/

var colors = require('colors')
var async = require('async')
var promise = require('promise')
var db = require('database')



function genRandom (low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

function genRecords (callBack, db) {
  for (let i = 0; i <= 100; i++) {

    let schemas = [
      new db.emergency({
        room_no: genRandom(1, 1000).toString(),
        patient_no: genRandom(300, 36789).toString(),
        severity: genRandom(1, 6).toString()
      }),
      new patients({
        name: 'patient_' + i.toString(),
        age: genRandom(1, 100).toString(),
        sex: 'male',
        address: 'street. no 1',
        diagnosis: [
          {
            body: 'cold'
          }
        ]
      }),
      new onduty({
        name: 'user_duty_' + i.toString(),
        phone: genRandom(123123, 928080345),
        pager: genRandom(91283012, 801238012),
        email: 'test@test' + i.toString() + '.com'
      }),
      new medication({
        name: 'medication_' + i.toString(),
        type: 'antibiotics',
        comments: [
          {
            body: 'good for cold'
          }
        ]
      })
    ]



  }
}

db.connect(() => {
  var emergency = require('emer_model')(db),
  patients = require('pati_model')(db),
  medication = require('med_model')(db),
  onduty = require('onduty_model')(db)
})
