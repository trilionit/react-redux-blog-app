var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";

// Load DB config from config file
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

// Init sequelize with params from config file
console.log('Create sequelize...');
console.log('config env', env);
console.log('config', config);

const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/blog');

// Empty db object to hold our models
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    // load all files except index.js (this file)
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    // For every model file, add the model to our db object
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Loop through models and check for the associate method.
// If the associate method exists, call it.
// The associations defined in our models will then initialized.
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
    /*
    db = {
      'posts': Post,
      'comments': Comment,
      ...etc...
    }
    */
  }
});

// Use sequelize with uppercase or lowercase
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;