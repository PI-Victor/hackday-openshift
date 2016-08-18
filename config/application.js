'use strict'

var express = require('express')
var consolidateHbs = require('consolidate').handlebars
var favicon = require('serve-favicon')
var compress = require('compression')
var morgan = require('morgan')
var path = require('path')

module.exports = (app) => {
  // other app settings and vars
  let rootPath = path.dirname(path.resolve(__dirname))
  let viewsPath = path.join(rootPath, '/views')
  let publicPath = path.join(rootPath, '/public')
  let faviconPath = path.join(publicPath, '/images/favicon.ico')
  let oneDay = 86400000

  app.use(compress())
  app.use(favicon(faviconPath))
  app.use(express.static(publicPath, {maxAge: oneDay}))
  app.use(morgan('combined'))
  app.set('view engine', 'html')
  app.engine('html', consolidateHbs)
  app.set('views', viewsPath)
}
