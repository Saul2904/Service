var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function () {
   var app = express();
   app.set('port', 3000);
   app.use(express.static('./public'));
   app.set('view engine', '.ejs');
   app.set('views', './public/partials');
   app.set('views', './public');

   app.use(bodyParser.urlencoded({extended: true}));
   app.use(bodyParser.json());
   app.use(require('method-override')());

   load('controllers', {cwd: 'app'})
      .then('routes')
      .into(app);
   return app;
};