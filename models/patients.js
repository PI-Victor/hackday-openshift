var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var patientSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  adress: String,
  checked_in: {Date, default: Date.Now},
  checked_out: {Date, default: Date.Now}
  diagnosis: [{body: String, date: Date}]
});
