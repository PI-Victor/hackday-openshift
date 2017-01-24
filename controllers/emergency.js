'use strict'

// create bogus data
// emergencies have only one severity? near death
var emergencies = [
  {
    Patient: 1,
    room_no: 333,
    severity: 2
  },
  {
    Patient: 23,
    room_no: 777,
    severity: 2
  },
  {
    Patient: 442,
    room_no: 234,
    severity: 1
  },
  {
    Patient: 2321,
    room_no: 99,
    severity: 3
  },
]


module.exports = (db) => {
  let Emergency = require('emer_model')(db)

  // display active emergencies, or a top of the most recent
  exports.show = (req, res) => {
    res.render('emergency', {
      title: 'This is the emergency',
      // doesn't accept json, only js objects
      emergencies: emergencies
    })
  }

  // create a new emergency entry
  exports.create = (req, res) => {
  }

  return this
}
