var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var emergencySchema = new Schema({
  room_no: String,
  patient_no: String,
  severity: Number
});

module.exports = mongoose.model('EmergencyModel', emergencySchema);
