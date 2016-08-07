var patients = [
  {
    Name: "John",
    Age: "62",
    Sex: "Male"
  },
  {
    Name: "Jenny",
    Age: "28",
    Sex: "Female"
  }
]

for(i=0; i < patients.length; i++) {
  console.log(patients[i])
}
exports.index = function(req, res) {
  res.render('index', {
    title: "Hospitality",
    patients: patients,
    cache: true,
  });
}

exports.login = function(req, res) {
  res.render('login', {
    title: 'Login',
  });
}
