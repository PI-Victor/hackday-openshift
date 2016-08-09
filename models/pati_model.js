var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var patientSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  adress: String,
  checked_in: {type: Date, default: Date.now},
  checked_out: {type: Date},
  diagnosis: [{body: String, date: Date}]
});

module.exports = mongoose.model("patientsModel", patientSchema)
