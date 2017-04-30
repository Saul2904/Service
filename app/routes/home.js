// var controller = require('../controllers/avisos')();


//  module.exports = function (app) {
//  	var connection = app.config.dbConnection();
// 	var avisosModel = app.app.models.avisosModel;

//      	avisosModel.getNoticias(connection, function(error, result){
// 			res.render('/index', controller.index, {avisos : result});
// 			app.render('/', controller.index, {avisos : result});
// 		}
//  }	

module.exports = function(application){

	application.get('/', function(req, res){
		application.app.controllers.home.index(application, req, res);
	});
}
