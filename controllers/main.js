exports.index = function(req, res) {
  res.render('index', {
    title: "Hospitality",
    cache: true
  });
}

exports.login = function(req, res) {
  res.render('login', {
    title: 'Login',
  });
}
