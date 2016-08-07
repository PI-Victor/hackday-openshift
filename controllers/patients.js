exports.show = function(res, req, next) {
  res.render('/patients', {
    title: "Patients"
  });
}

exports.add = function(res, req, next) {
  res.render('/patients/add', {
    title: 'Add new entry'
  });
}
