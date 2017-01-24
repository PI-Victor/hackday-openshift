'use strict'
let inspect = require('util').inspect


module.exports = (db) => {
  let EmergencySchema = new db.schema({
    created: {type: Date, 'default': Date.now},
    room_no: String,
    severity: Number
  })
  console.log('loading emergency model schema')
  db.model('Emergency', EmergencySchema)
  console.log('Loaded Document Emergency'.blue)
  console.log(inspect(this))
  return this
}
