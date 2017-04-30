module.exports = function(application) {
	
	application.get('/#!/home', function(req, res){
		application.app.controllers.noticias.noticias(application, req, res);		
	});

	application.get('/#!/home', function(req, res){
		application.app.controllers.noticias.noticia(application, req, res);
	});

};