var express = require("express"),
    consolidate = require("consolidate"),
    mongoose = require("mongoose"),
    color = require("colors"),
    handlebars = require("handlebars"),
    favicon = require("serve-favicon"),
    compress = require("compression"),
    logger = require("morgan"),
    path = require("path");

module.exports  = function(app) {
    //other app settings and vars
    rootPath = path.dirname(path.resolve(__dirname)),
    viewsPath = path.join(rootPath, "/views"),
    publicPath = path.join(rootPath, "/public"),
    faviconPath = path.join(publicPath, "/images/favicon.ico"),
    oneDay = 86400000;

    app.use(compress());
    app.use(favicon(faviconPath));
    console.log(publicPath)
    app.use(express.static(publicPath, {maxAge: oneDay}));
    app.use(logger('dev'));
    app.engine("html", consolidate.handlebars);
    app.set("view engine", "html");
    app.set("views", viewsPath);
}
