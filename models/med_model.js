var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var medicationSchema = new Schema({
  name: String,
  type: String,
  comments: [{body: String, date: Date}]
})

module.exports = mongoose.model('medicationModel', medicationSchema)
