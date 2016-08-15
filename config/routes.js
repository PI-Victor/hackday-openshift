var main = require('main'),
  patients = require('patients'),
  emergency = require('emergency'),
  onduty = require('onduty'),
  medication = require('medication')

module.exports = function (app) {
  app.get('/', main.index)
  app.get('/login', main.login)
  app.get('/patients', patients.add)
  app.get('/emergency', emergency.show)
  app.get('/onduty', onduty.show)
  app.get('/medication', medication.show)
}
