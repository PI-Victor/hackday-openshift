var express = require('express'),
  consolidateHbs = require('consolidate').handlebars,
  favicon = require('serve-favicon'),
  compress = require('compression'),
  logger = require('morgan'),
  path = require('path')


module.exports = function (app) {
  // other app settings and vars
  let rootPath = path.dirname(path.resolve(__dirname)),
    viewsPath = path.join(rootPath, '/views'),
    publicPath = path.join(rootPath, '/public'),
    faviconPath = path.join(publicPath, '/images/favicon.ico'),
    oneDay = 86400000

  app.use(compress())
  app.use(favicon(faviconPath))
  app.use(express.static(publicPath, {maxAge: oneDay}))
  // remember to change this accordingly.
  app.use(logger('dev'))
  app.set('view engine', 'html')
  app.engine('html', consolidateHbs)
  app.set('views', viewsPath)
}
