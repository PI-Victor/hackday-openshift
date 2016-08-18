'use strict'

module.exports = (db) => {
  let EmergencySchema = new db.schema({
    created: {type: Date, 'default': Date.now},
    room_no: String,
    severity: Number
  })

  db.model('Emergency', EmergencySchema)
  console.log('Loaded Document Emergency'.blue)
}
