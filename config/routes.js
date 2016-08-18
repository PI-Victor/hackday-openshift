'use strict'

module.exports = (app, db) => {
  let home = require('home')
  let patients = require('patients')
  let emergency = require('emergency')(db)
  let onduty = require('onduty')
  let medication = require('medication')

  app.get('/', home.show)
  app.get('/login', home.login)
  app.get('/patients', patients.create)
  app.get('/emergency', emergency.show)
  app.get('/onduty', onduty.show)
  app.get('/medication', medication.show)
}
