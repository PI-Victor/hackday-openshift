'use strict'

module.exports = (db) => {
  let MedicationSchema = new Schema({
    name: String,
    type: String,
    comments: [{body: String, date: Date}]
  })
}
