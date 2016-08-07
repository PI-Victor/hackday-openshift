var main = require('main'),
  patients = require('patients');

module.exports = function(app) {
  app.get('/', main.index);
  app.get('/login', main.login);
  app.get('/patients', patients.show);
  app.get('/patients/add_new', patients.add);
}
