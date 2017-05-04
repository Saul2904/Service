
module.exports = function(){

console.log("achou o model");

	this.getNoticias = function(connection, callback){
		connection.query('select * from TBavisos', callback);
	}

	this.getNoticia = function(connection, callback){
		connection.query('select * from TBavisos where codAvisos = 2', callback);
	}

	return this;
}

function AvisosDAO(connection){
	this._connection = connection;
	
}

AvisosDAO.prototype.getAvisos = function(callback){
	this._connection.query('select * from TBavisos', callback);
	console.log('entrou no get avisos');
}

AvisosDAO.prototype.getAviso = function(id_aviso, callback){
	console.log(id_noticia.id_aviso);
	this._connection.query('select * from TBavisos where codAvisos = ' + id_aviso.id_aviso, callback);
}

AvisosDAO.prototype.salvarAvisos = function(noticia, callback){
	this._connection.query('insert into TBavisos set ? ', noticia, callback)
}

AvisosDAO.prototype.get5UltimasAvisos = function(callback){
	this._connection.query('select * from TBavisos limit 5', callback);
}

module.exports = function(){
	return AvisosDAO;
}