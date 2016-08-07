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
