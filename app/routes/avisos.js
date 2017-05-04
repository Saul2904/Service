module.exports = function(application) {
	application.get('/avisos', function(req, res){
		console.log("chegou na rota");
		application.app.controllers.avisos.avisos(application, req, res);		
	});

	application.get('/#!/aviso', function(req, res){
		application.app.controllers.avisos.aviso(application, req, res);
	});

};