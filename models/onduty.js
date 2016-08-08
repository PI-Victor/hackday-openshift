var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var ondutySchema = new Schema({
  name: String,
  phone: String,
  pager: String,
  email: String,
});
