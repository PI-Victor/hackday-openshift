'use strict'

var inspect = require('util').inspect
var mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/Hospitality')
let schema = require('mongoose').Schema
db.schema = schema
let Emer = require('./models/emer_model')(db)
function genRandom (low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

console.dir(Emer)
db.connection.on('connected', () => {
  inspect(`This is the emergecy schema model ${Emer}`)
  let emer_table = new Emer({
    room_no: genRandom(1, 233).toString(),
    patient_no: genRandom(300, 5345).toString(),
    severity: genRandom(1, 6).toString()
  })
  emer_table.save().then(() => {
    console.log('saved!')
  })
})
