var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var emergencySchema = new Schema({
  room_no: String,
  patient_no: String,
  severity: Number
});

emergencySchema.save(function(err, name) {
  if (err) throw err;
  console.log('Applied!')
});

// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
