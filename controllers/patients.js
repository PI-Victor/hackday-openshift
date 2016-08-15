exports.show = function (res, req, next) {
  res.render('/patients', {
    title: "Patients"
  })
}

exports.add = function (res, req, next) {
  res.render('/patients/add', {
    title: 'Add new entry'
  })
}

// // on every save, add the date
// userSchema.pre('save', function(next) {
//   // get the current date
//   var currentDate = new Date();
//
//   // change the updated_at field to current date
//   this.updated_at = currentDate;
//
//   // if created_at doesn't exist, add to that field
//   if (!this.created_at)
//     this.created_at = currentDate;
//
//   next();
// });
