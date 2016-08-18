'use strict'

module.exports = (db) => {
  let Emergency = require('emer_model')(db)

  exports.show = (req, res) => {
    res.render('emergency', {
      title: 'Emergency'
    })
  }

  exports.create = (req, res) => {

  }
  return exports
}
